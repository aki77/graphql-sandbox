module Types
  class MutationType < Types::BaseObject
    field :create_chat_room_message, mutation: Mutations::CreateChatRoomMessage
  end
end
