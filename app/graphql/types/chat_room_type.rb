# frozen_string_literal: true

module Types
  class ChatRoomType < Types::BaseObject
    implements GraphQL::Types::Relay::Node
    global_id_field :gid

    field :id, ID, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :chat_room_messages, [Types::ChatRoomMessageType], null: false
    field :like_count, Int, null: false

    def like_count
      rand(100)
    end
  end
end
