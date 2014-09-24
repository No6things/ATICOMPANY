class CreateUsuarioEmpresas < ActiveRecord::Migration
  def change
    create_table :usuario_empresas do |t|
      t.integer :usuario_id
      t.integer :empresa_id

      t.timestamps
    end
  end
end
