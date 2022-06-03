class AlterRiderLatLong < ActiveRecord::Migration[7.0]
  def change
    remove_column :riders, :lat_long, :json
    add_column :riders, :lat_long, :decimal, array: true, default: []
  end
end
