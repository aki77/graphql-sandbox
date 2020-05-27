# frozen_string_literal: true

module Types
  class SubscriptionType < Types::BaseObject
    extend GraphQL::Subscriptions::SubscriptionRoot

    field :chat_room_message_was_created, subscription: Subscriptions::ChatRoomMessageWasCreated
    field :sub_test, subscription: Subscriptions::SubTest
    # field :chat_room_message_was_created, Types::ChatRoomMessageType, null: false
  end
end
