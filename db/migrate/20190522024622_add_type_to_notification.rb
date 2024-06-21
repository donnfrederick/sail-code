class AddTypeToNotification < ActiveRecord::Migration[5.2]
  def change
    add_column :notifications, :notification_type, :integer, default: 0
  end
end
