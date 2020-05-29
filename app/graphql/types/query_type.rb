# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    # field :chat_room_messages, Types::ChatRoomMessageType.connection_type, null: false do
    #   description 'メッセージ一覧をpaginationで取得します'
    #   argument :chat_room_id,  ID, required: true
    # end

    # def chat_room_messages(chat_room_id:)
    #   ChatRoomMessage.where(chat_room_id: chat_room_id).order(id: :desc)
    # end
    add_field GraphQL::Types::Relay::NodeField
    add_field GraphQL::Types::Relay::NodesField

    field :chat_room, Types::ChatRoomType, null: false do
      description 'チャットルームを取得します'
      argument :id, ID, required: true
    end

    field :chat_rooms, [Types::ChatRoomType], null: false do
      description 'チャットルームを全て取得します'
    end

    field :chat_room_messages, [Types::ChatRoomMessageType], null: false do
      description 'メッセージを全て取得します'
      argument :chat_room_id, ID, required: true
    end

    def chat_room(id:)
      Loaders::RecordLoader.for(ChatRoom).load(id.to_i)
    end

    def chat_rooms
      ChatRoom.all
    end

    def chat_room_messages(chat_room_id:)
      ChatRoomMessage.where(chat_room_id: chat_room_id)
    end
  end
end
