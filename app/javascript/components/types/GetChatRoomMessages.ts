/* Tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetChatRoomMessages
// ====================================================

export interface GetChatRoomMessages_chatRoomMessages_edges_node {
  __typename: "ChatRoomMessage";
  content: string;
}

export interface GetChatRoomMessages_chatRoomMessages_edges {
  __typename: "ChatRoomMessageEdge";
  /**
   * The item at the end of the edge.
   */
  node: GetChatRoomMessages_chatRoomMessages_edges_node | null;
}

export interface GetChatRoomMessages_chatRoomMessages {
  __typename: "ChatRoomMessageConnection";
  /**
   * A list of edges.
   */
  edges: (GetChatRoomMessages_chatRoomMessages_edges | null)[] | null;
}

export interface GetChatRoomMessages {
  /**
   * メッセージ一覧をpaginationで取得します
   */
  chatRoomMessages: GetChatRoomMessages_chatRoomMessages;
}
