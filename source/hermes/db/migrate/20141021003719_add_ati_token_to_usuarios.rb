class AddAtiTokenToUsuarios < ActiveRecord::Migration
  def change
    add_column :usuarios, :api_token, :string
  end
end
