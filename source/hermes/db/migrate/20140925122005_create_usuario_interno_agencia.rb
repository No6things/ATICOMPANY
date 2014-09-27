class CreateUsuarioInternoAgencia < ActiveRecord::Migration
  def change
    create_table :usuario_interno_agencia do |t|
      t.integer :usuario_id
      t.integer :agencia_id

      t.timestamps
    end
  end
end
