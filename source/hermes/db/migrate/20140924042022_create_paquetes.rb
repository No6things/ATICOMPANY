class CreatePaquetes < ActiveRecord::Migration
  def change
    create_table :paquetes do |t|
      t.float :ancho
      t.float :alto
      t.float :peso
      t.text :descripcion
      t.string :numero_guia
      t.float :costo

      t.timestamps
    end
    add_index :paquetes, :numero_guia
    add_index :paquetes, :costo
  end
end
