class ExpandEvents < ActiveRecord::Migration[7.1]
  def change
    add_column :events, :title, :string
    add_column :events, :latitude, :float
    add_column :events, :longitude, :float
    add_column :events, :theme, :string
  end
end
