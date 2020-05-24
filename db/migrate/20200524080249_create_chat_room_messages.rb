class CreateChatRoomMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :chat_room_messages do |t|
      t.references :chat_room, null: false, foreign_key: true
      t.text :content, null: false

      t.timestamps
    end
  end
end
