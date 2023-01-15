const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) =>{

    const patient = sequelize.define("patient",{
        patientId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
          },
        patientName: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          patientAge: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          patientAddress: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          patientEmail: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          patientPassword: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    },{
        hooks : {
            beforeCreate : (user , options) => {
                {
                    user.patientPassword = user.patientPassword && user.patientPassword != "" ? bcrypt.hashSync(user.patientPassword, 10) : "";
                }
            }
        }
    })
    return patient
}
