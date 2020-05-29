# frozen_string_literal: true

module Types
  class ChatRoomMessageType < Types::BaseObject
    implements GraphQL::Types::Relay::Node
    global_id_field :gid

    field :id, ID, null: false
    field :content, String, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
