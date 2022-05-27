class AlterRiderGender < ActiveRecord::Migration[7.0]
  def change
    add_column :riders, :gender, :string 
  end
end
