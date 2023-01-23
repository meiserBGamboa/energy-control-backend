import { DataTypes, Model, ModelCtor, Optional, Sequelize } from 'sequelize'

interface smartHomeAttributes {
  id: number
  description: string
}

type SmartHomeCreationAttributes = Optional<smartHomeAttributes, 'id'>

interface SmartHomeInstance
  extends Model<smartHomeAttributes, SmartHomeCreationAttributes>,
    smartHomeAttributes {}

const smartHomeFactory = (sequelize: Sequelize): ModelCtor<SmartHomeInstance> =>
  sequelize.define<SmartHomeInstance>(
    'SmartHome',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      description: {
        allowNull: true,
        type: DataTypes.STRING
      }
    },
    {
      tableName: 'smart_home',
      timestamps: false
    }
  )

export { SmartHomeCreationAttributes, SmartHomeInstance, smartHomeFactory }
