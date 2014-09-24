class CreateTipoUsuarios < ActiveRecord::Migration
  def change
    create_table :tipo_usuarios do |t|
      t.string :nombre
      t.string :abreviacion      

      t.timestamps
    end
    add_index :tipo_usuarios, :abreviacion
  end
end
