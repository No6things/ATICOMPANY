class CreateAgencia < ActiveRecord::Migration
  def change
    create_table :agencia do |t|
      t.string :nombre
      t.text :ubicacion
      t.float :latitud
      t.float :longitud
      t.integer :empresa_id

      t.timestamps
    end
    add_index :agencia, :nombre
  end
end
