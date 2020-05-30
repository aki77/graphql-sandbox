# frozen_string_literal: true

class ChatRoomMessage < ApplicationRecord
  belongs_to :chat_room

  validates :content, presence: true, length: { maximum: 100 }
end
