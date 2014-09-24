class CreateAgenciaPaquetes < ActiveRecord::Migration
  def change
    create_table :agencia_paquetes do |t|
      t.datetime :fecha_arribo
      t.integer :agencia_id
      t.integer :paquete_id
      t.integer :tipo_estado_id

      t.timestamps
    end
    add_index :agencia_paquetes, :fecha_arribo    
  end
end
