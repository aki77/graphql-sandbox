# frozen_string_literal: true

module Types
  class ChatRoomType < Types::BaseObject
    field :id, ID, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :chat_room_messages, [Types::ChatRoomMessageType], null: false
  end
end
