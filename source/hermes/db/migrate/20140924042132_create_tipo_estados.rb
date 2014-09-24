class CreateTipoEstados < ActiveRecord::Migration
  def change
    create_table :tipo_estados do |t|
      t.string :nombre
      t.string :abreviacion

      t.timestamps
    end
    add_index :tipo_estados, :abreviacion
  end
end
