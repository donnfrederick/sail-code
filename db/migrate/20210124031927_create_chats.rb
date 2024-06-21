class CreateChats < ActiveRecord::Migration[5.2]
  def change
    create_table :chats do |t|
      t.references :user
      t.references :conversation
      t.text :content

      t.timestamps
    end
  end
end
