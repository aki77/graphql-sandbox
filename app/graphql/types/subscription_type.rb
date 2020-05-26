module Types
  class SubscriptionType < Types::BaseObject
    field :chat_room_message_was_created, subscription: Subscriptions::ChatRoomMessageWasCreated
  end
end
