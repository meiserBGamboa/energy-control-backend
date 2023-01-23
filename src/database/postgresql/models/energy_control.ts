import { DataTypes, Model, ModelCtor, Optional, Sequelize } from 'sequelize'

interface energyControlAttributes {
  id: number
  id_home: number
  date_registration: string
  i_rms: number
  wats: number
}

type energyControlCreationAttributes = Optional<energyControlAttributes, 'id'>

interface EnergyControlInstance
  extends Model<energyControlAttributes, energyControlCreationAttributes>,
    energyControlAttributes {}

const energyControlFactory = (
  sequelize: Sequelize
): ModelCtor<EnergyControlInstance> =>
  sequelize.define<EnergyControlInstance>(
    'EnergyControl',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      id_home: {
        allowNull: true,
        type: DataTypes.INTEGER
      },
      date_registration: {
        allowNull: true,
        type: DataTypes.STRING
      },
      i_rms: {
        allowNull: true,
        type: DataTypes.FLOAT
      },
      wats: {
        allowNull: true,
        type: DataTypes.FLOAT
      }
    },
    {
      tableName: 'energy_control',
      timestamps: false
    }
  )

export {
  energyControlCreationAttributes,
  EnergyControlInstance,
  energyControlFactory
}
