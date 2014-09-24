class CreateUsuarios < ActiveRecord::Migration
  def change
    create_table :usuarios do |t|
      t.string :nombre
      t.string :apellido
      t.string :correo_electronico
      t.datetime :fecha_ultimo_acceso
      t.integer :tipo_usuario_id

      t.timestamps
    end
    add_index :usuarios, :nombre
    add_index :usuarios, :apellido
    add_index :usuarios, :correo_electronico
    add_index :usuarios, :fecha_ultimo_acceso
  end
end
