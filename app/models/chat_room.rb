class ChatRoom < ApplicationRecord
  has_many :chat_room_messages, dependent: :destroy
end
