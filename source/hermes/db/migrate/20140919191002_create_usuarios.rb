class CreateUsuarios < ActiveRecord::Migration
  def change
    create_table :usuarios do |t|
      t.integer :tipo_usuario_id
      t.string :nombre
      t.string :apellido
      t.string :correo_electronico
      t.string :password
      t.timestamp :fecha_ultimo_acceso
      t.references :tipo_usuario, index: true

      t.timestamps
    end
  end
end
