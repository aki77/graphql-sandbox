# frozen_string_literal: true

class GraphqlSandboxSchema < GraphQL::Schema
  max_complexity 100
  max_depth 10

  mutation(Types::MutationType)
  query(Types::QueryType)
  subscription(Types::SubscriptionType)

  use GraphQL::Subscriptions::ActionCableSubscriptions

  # Opt in to the new runtime (default in future graphql-ruby versions)
  use GraphQL::Execution::Interpreter
  use GraphQL::Analysis::AST

  # Add built-in connections for pagination
  use GraphQL::Pagination::Connections

  use GraphQL::Batch

  # @return [String] generate a unique ID for `object` using Rails's GlobalID library
  def self.id_from_object(object, _type, _context)
    object.to_global_id.to_s
  end

  # @return [Object] Load the object specified by `unique_id`, using Rails's GlobalID library
  def self.object_from_id(unique_id, _context)
    GlobalID::Locator.locate(unique_id)
  end

  def self.resolve_type(_type, obj, _ctx)
    Types.const_get("#{obj.class.name}Type", false)
  end

  orphan_types(Types::ChatRoomType, Types::ChatRoomMessageType)
end
