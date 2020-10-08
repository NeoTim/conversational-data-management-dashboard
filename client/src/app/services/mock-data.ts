const data = {
  ownerDomain: 'google.com',
  revision: '20200929',
  version_module: true,
  protocol: 'rest',
  resources: {
    ping: {
      methods: {
        pingServer: {
          path: 'v1/ping:pingServer',
          response: {
            $ref: 'GoogleCorpGeoservicesinteractionsV1PingServerResponse',
          },
          flatPath: 'v1/ping:pingServer',
          httpMethod: 'GET',
          id: 'corp_autopush_geoservicesinteractions.ping.pingServer',
          description:
            'A RPC endpoint to ping geoservicesinteractions corp API service.',
          parameters: {
            pingContent: {
              description:
                'The content client sent for triggering ping service.',
              type: 'string',
              location: 'query',
            },
          },
          parameterOrder: [],
        },
      },
    },
    datastore: {
      resources: {
        interactions: {
          resources: {
            internal: {
              methods: {
                bridgeTrackRouterSubmitAction: {
                  response: {
                    $ref:
                      'GoogleCorpGeoservicesinteractionsV1BridgeTrackRouterSubmitActionResponse',
                  },
                  parameters: {},
                  httpMethod: 'POST',
                  id:
                    'corp_autopush_geoservicesinteractions.datastore.interactions.internal.bridgeTrackRouterSubmitAction',
                  path:
                    'v1/datastore/interactions/internal:bridgeTrackRouterSubmitAction',
                  parameterOrder: [],
                  description:
                    "An RPC endpoint to track router's SubmitAction payload in data store.",
                  flatPath:
                    'v1/datastore/interactions/internal:bridgeTrackRouterSubmitAction',
                  request: {
                    $ref:
                      'GoogleCorpGeoservicesinteractionsV1BridgeTrackRouterSubmitActionRequest',
                  },
                },
                bridgeGetStructuredRequestContent: {
                  parameterOrder: [],
                  path:
                    'v1/datastore/interactions/internal:bridgeGetStructuredRequestContent',
                  response: {
                    $ref:
                      'GoogleCorpGeoservicesinteractionsV1BridgeGetStructuredRequestContentResponse',
                  },
                  httpMethod: 'POST',
                  request: {
                    $ref:
                      'GoogleCorpGeoservicesinteractionsV1BridgeGetStructuredRequestContentRequest',
                  },
                  parameters: {},
                  flatPath:
                    'v1/datastore/interactions/internal:bridgeGetStructuredRequestContent',
                  id:
                    'corp_autopush_geoservicesinteractions.datastore.interactions.internal.bridgeGetStructuredRequestContent',
                  description:
                    "An RPC endpoint to get initial consumer's structured request on a thread.",
                },
              },
            },
          },
        },
      },
    },
  },
  baseUrl: 'https://autopush-geoservicesinteractions.corp.googleapis.com/',
  mtlsRootUrl:
    'https://autopush-geoservicesinteractions.corp.mtls.googleapis.com/',
  fullyEncodeReservedExpansion: true,
  documentationLink:
    'http://boq/java/com/google/geo/services/interactions/boq/bridgeserver',
  description:
    'The Geo Services Interactions v1 is an API that provides access to Geo Services SIFS compoents, including Router, Data Store, Email-Handler, etc. Please visit go/sifs for more information.',
  servicePath: '',
  rootUrl: 'https://autopush-geoservicesinteractions.corp.googleapis.com/',
  version: 'v1',
  ownerName: 'Google',
  parameters: {
    '$.xgafv': {
      enum: ['1', '2'],
      location: 'query',
      enumDescriptions: ['v1 error format', 'v2 error format'],
      type: 'string',
      description: 'V1 error format.',
    },
    alt: {
      enumDescriptions: [
        'Responses with Content-Type of application/json',
        'Media download with context-dependent Content-Type',
        'Responses with Content-Type of application/x-protobuf',
      ],
      type: 'string',
      default: 'json',
      location: 'query',
      description: 'Data format for response.',
      enum: ['json', 'media', 'proto'],
    },
    fields: {
      description:
        'Selector specifying which fields to include in a partial response.',
      type: 'string',
      location: 'query',
    },
    oauth_token: {
      description: 'OAuth 2.0 token for the current user.',
      location: 'query',
      type: 'string',
    },
    access_token: {
      description: 'OAuth access token.',
      type: 'string',
      location: 'query',
    },
    prettyPrint: {
      location: 'query',
      type: 'boolean',
      default: 'true',
      description: 'Returns response with indentations and line breaks.',
    },
    key: {
      location: 'query',
      type: 'string',
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
    },
    quotaUser: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      location: 'query',
      type: 'string',
    },
    callback: {
      type: 'string',
      location: 'query',
      description: 'JSONP',
    },
    uploadType: {
      description:
        'Legacy upload protocol for media (e.g. "media", "multipart").',
      type: 'string',
      location: 'query',
    },
    upload_protocol: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      location: 'query',
      type: 'string',
    },
  },
  kind: 'discovery#restDescription',
  schemas: {
    GeoLocalBoqServiceareabusinessGetaquoteProtoFormContentField: {
      properties: {
        name: {
          description:
            "The field name displayed to the user. Should be in the user's language.",
          type: 'string',
        },
        value: {
          description: 'The value entered or selected by the user.',
          type: 'string',
        },
        type: {
          type: 'string',
          enumDescriptions: [
            '',
            "Free-form description of user's location.",
            "The user's reported zip code.",
            'Free-form description of the project.',
            'Free-form description of the project. Contains a prefilled value used for the optional fields experiment.',
            'Free-form description of the project.',
            'Free-form description of the project. Contains a prefilled value used for the optional fields experiment.',
            'List of radio buttons of the reason to decline a quote request.',
            'Free-form description of the quote reply.',
            "Free-form description of the quote's price. It can be a fix price or a price range.",
            'Number of bedrooms and bathrooms to be cleaned.',
            '',
            'Area (in square feet) to be cleaned.',
            'The service type requested. Customizable per service vertical.',
            'The service type requested with a disclaimer message.',
            'Free-form service description.',
            'The service type requested. Clientside rendered with the results of a GetServiceItems RPC made asynchronously. go/getaquote-job-types',
            'How quickly the user needs a home service.',
            'Free-form time details.',
            'Free-form message from the consumer.',
            'Free-form message from the consumer regarding local post.',
            'Free-form message from the merchant.',
            'How quickly the user needs booking.',
            'Free-form time details for booking request message from the consumer.',
            'Free-form booking request message from the consumer.',
            'Free-form booking service details from the consumer.',
            'Electronic device make/model.',
            "Issue with the user's electronic device.",
            "Free-form description of the user's electrionic repair request.",
            "Free-form description of the user's electrionic repair request. Contains a prefilled value used for the optional fields experiment.",
            'Free-form product chat request message from the consumer.',
            'Raw phone number provided by the consumer or merchant at which to be called back.',
            'Free-form review private reply message from the merchant.',
          ],
          description: 'The type of field.',
          enum: [
            'FIELD_TYPE_UNDEFINED',
            'SERVICE_LOCATION',
            'ZIP_CODE',
            'PROJECT_DETAILS',
            'PROJECT_DETAILS_PREFILLED',
            'QUOTE_DETAILS',
            'QUOTE_DETAILS_PREFILLED',
            'QUOTE_REPLY_DECLINE_REASON',
            'QUOTE_REPLY_DETAILS',
            'QUOTE_REPLY_PRICE',
            'BEDROOM_COUNT',
            'BATHROOM_COUNT',
            'SQUARE_FOOTAGE',
            'SERVICE_TYPE',
            'SERVICE_TYPE_WITH_DISCLAIMER',
            'SERVICE_DETAILS',
            'CATEGORY_RPC_SERVICE_TYPE',
            'SERVICE_TIME_FRAME',
            'SERVICE_TIME_DETAILS',
            'MESSAGE_DETAILS',
            'LOCAL_POST_MESSAGE_DETAILS',
            'MESSAGE_REPLY_DETAILS',
            'BOOKING_TIME_FRAME',
            'BOOKING_TIME_DETAILS',
            'BOOKING_DETAILS',
            'BOOKING_SERVICE_DETAILS',
            'ELECTRONIC_REPAIR_DEVICE',
            'ELECTRONIC_REPAIR_ISSUE',
            'ELECTRONIC_REPAIR_DETAILS',
            'ELECTRONIC_REPAIR_DETAILS_PREFILLED',
            'PRODUCT_CHAT_DETAILS',
            'CALLBACK_NUMBER',
            'REVIEW_PRIVATE_REPLY_MESSAGE_DETAILS',
          ],
        },
      },
      type: 'object',
      id: 'GeoLocalBoqServiceareabusinessGetaquoteProtoFormContentField',
    },
    GoogleCorpGeoservicesinteractionsV1BridgeGetStructuredRequestContentResponse: {
      properties: {
        getStructuredRequestContentResponse: {
          description:
            'The response from GeoServicesInteractionsDataStoreInteractionsInternalService.GetStructuredRequestContent RPC.',
          $ref:
            'GeoServicesInteractionsBoqDatastoreInteractionsInternalProtoGetStructuredRequestContentResponse',
        },
      },
      description: 'The response to BridgeGetStructuredRequestContentRequest.',
      id:
        'GoogleCorpGeoservicesinteractionsV1BridgeGetStructuredRequestContentResponse',
      type: 'object',
    },
    GeoServicesInteractionsBoqRouterProtoBusinessId: {
      properties: {
        glsProviderId: {
          type: 'string',
          description: 'The id uniquely defining a GLS provider.',
        },
        gmbListingId: {
          type: 'string',
          description: 'The unobfuscated GMB listing id of the business.',
        },
      },
      id: 'GeoServicesInteractionsBoqRouterProtoBusinessId',
      type: 'object',
      description:
        'An ID representing a business supported by SIFS routing system.',
    },
    GeoServicesInteractionsBoqRouterProtoDestination: {
      type: 'object',
      id: 'GeoServicesInteractionsBoqRouterProtoDestination',
      description:
        'Destination to route the action to. For the initial requests, both business_id and thread_id need to be specified. For follow-on requests, only thread_id is required.',
      properties: {
        business: {
          $ref: 'GeoServicesInteractionsBoqRouterProtoBusinessId',
          description:
            'Business to send initial requests to. Required when this is initial request (e.g., SUBMIT_REQUEST or UPSELL). Otherwise, should be omitted. Optional.',
        },
        threadId: {
          description: 'Required.',
          $ref: 'GeoServicesInteractionsBoqRouterProtoDestinationThreadId',
        },
      },
    },
    GoogleCorpGeoservicesinteractionsV1PingServerResponse: {
      type: 'object',
      properties: {
        pingTime: {
          type: 'string',
          description: 'The current timestamp.',
          format: 'google-datetime',
        },
      },
      description: 'A response to ping request.',
      id: 'GoogleCorpGeoservicesinteractionsV1PingServerResponse',
    },
    GeoServicesInteractionsBoqRouterProtoBusinessMerchantId: {
      type: 'object',
      description:
        'Identification of the Merchant of a Business. If a single merchant (e.g., GAIA account) maintains multiple businesses, there will be distinct BusinessMerchant entities for each of them. Next ID: 3',
      properties: {
        unobfuscatedGaiaId: {
          type: 'string',
          format: 'int64',
          description: 'The unobfuscated gaia id of the merchant. Required.',
        },
      },
      id: 'GeoServicesInteractionsBoqRouterProtoBusinessMerchantId',
    },
    GeoServicesInteractionsBoqRouterProtoText: {
      id: 'GeoServicesInteractionsBoqRouterProtoText',
      properties: {
        plainText: {
          description: 'Required.',
          type: 'string',
        },
      },
      type: 'object',
      description: 'Next ID: 2',
    },
    GeoServicesInteractionsBoqRouterProtoDestinationThreadId: {
      id: 'GeoServicesInteractionsBoqRouterProtoDestinationThreadId',
      description:
        'Thread is the representation of a conversation between consumer and merchants around a single service request. Sending to the thread means that all the parties in the thread might be notified about this action. For example, if consumer sends message to a thread, all merchants on the thread are notified. If merchant sends a reply, consumer receives it and all other merchants might also get a notification that reply to a consumer is sent by someone from their business. For the original request (e.g., action_type = SUBMIT_REQUEST | UPSELL), client must generate thread_id and provide business entity too. For follow-on communication, only thread_id is required.',
      type: 'object',
      properties: {
        threadId: {
          type: 'string',
        },
      },
    },
    GeoServicesInteractionsBoqRouterProtoSubmitActionRequestGroupingId: {
      id: 'GeoServicesInteractionsBoqRouterProtoSubmitActionRequestGroupingId',
      description:
        'ID for grouping actions in logical blocks. For example, consumer submits a request and then submits an upsell, both with the same grouping_id. This allows backends to understand that both initial request and upsell are part of the same logical group. For example, grouping_id will allow multiple requests be grouped into Tasks and performing task-related metrics, sending out batched confirmation emails, etc. Next ID: 2',
      properties: {
        groupId: {
          type: 'string',
        },
      },
      type: 'object',
    },
    GeoServicesInteractionsBoqRouterProtoPayload: {
      properties: {
        content: {
          description:
            'Ordered list of content in the payload (e.g., email text and image attachments).',
          type: 'array',
          items: {
            $ref: 'GeoServicesInteractionsBoqRouterProtoPayloadContent',
          },
        },
      },
      id: 'GeoServicesInteractionsBoqRouterProtoPayload',
      description: 'Payload of the actions routed by SIFS Router. Next ID: 4',
      type: 'object',
    },
    GeoServicesInteractionsBoqRouterProtoActionMetadata: {
      description:
        'Centralized place for all of metadata associated with SIFS SubmitActionRequest. Next ID: 5',
      id: 'GeoServicesInteractionsBoqRouterProtoActionMetadata',
      type: 'object',
      properties: {
        destinationMetadata: {
          type: 'array',
          items: {
            $ref: 'GeoServicesInteractionsBoqRouterProtoDestinationMetadata',
          },
          description:
            'This replicates pattern of repeated destinations in ActionRequest proto and lives in this proto to keep all of metadata centralized. Optional.',
        },
        experimentIds: {
          description:
            'List of Mendel experiment IDs (from GWS or Boq) to annotate action with. Optional.',
          type: 'array',
          items: {
            type: 'string',
          },
        },
        senderMetadata: {
          description: 'Metadata about the action sender. Optional.',
          $ref: 'GeoServicesInteractionsBoqRouterProtoSenderMetadata',
        },
        metadataMap: {
          additionalProperties: {
            additionalProperties: {
              type: 'any',
              description:
                'Properties of the object. Contains field @type with type URL.',
            },
            type: 'object',
          },
          type: 'object',
          description:
            'For logging: A map to store custom metadata, the content is transparent to SIFS. Could be used for logging params, experiments, etc. Optional.',
        },
      },
    },
    GeoServicesInteractionsBoqDatastoreInteractionsInternalProtoGetStructuredRequestContentRequest: {
      description:
        "Request message sent by internal clients to SIFS Data Store for fetching consumer's initial Structured Request content in a thread. Next ID: 2",
      properties: {
        threadId: {
          description: 'The ThreadId between consumer and merchant.',
          $ref: 'GeoServicesInteractionsBoqRouterProtoDestinationThreadId',
        },
      },
      type: 'object',
      id:
        'GeoServicesInteractionsBoqDatastoreInteractionsInternalProtoGetStructuredRequestContentRequest',
    },
    GeoServicesInteractionsBoqDatastoreInteractionsInternalProtoTrackRouterSubmitActionRequest: {
      properties: {
        submitActionRequest: {
          description: "SIFS Router's SubmitActionRequest payload.",
          $ref: 'GeoServicesInteractionsBoqRouterProtoSubmitActionRequest',
        },
      },
      type: 'object',
      description:
        'Request message sent by SIFS Router to track transaction(s) included in one SubmitActionRequest. Next ID: 2',
      id:
        'GeoServicesInteractionsBoqDatastoreInteractionsInternalProtoTrackRouterSubmitActionRequest',
    },
    GeoServicesInteractionsBoqDatastoreInteractionsInternalProtoTrackRouterSubmitActionResponse: {
      type: 'object',
      id:
        'GeoServicesInteractionsBoqDatastoreInteractionsInternalProtoTrackRouterSubmitActionResponse',
      properties: {
        conversationGroupId: {
          type: 'string',
          format: 'int64',
          description:
            'The SIFS Data Store generated conversation id of this submit action request.',
        },
        transactionId: {
          description:
            'The SIFS Data Store generated transaction id of this submit action request.',
          format: 'int64',
          type: 'string',
        },
        threadId: {
          type: 'string',
          description:
            'The client generated thread id of this submit action request.',
        },
        status: {
          $ref: 'GoogleRpcStatus',
          description: 'The status of the request.',
        },
      },
      description: 'Response for TrackRouterSubmitActionRequest. Next ID: 5',
    },
    GoogleCorpGeoservicesinteractionsV1BridgeTrackRouterSubmitActionResponse: {
      id:
        'GoogleCorpGeoservicesinteractionsV1BridgeTrackRouterSubmitActionResponse',
      type: 'object',
      properties: {
        trackRouterSubmitActionResponse: {
          description:
            'The response from GeoServicesInteractionsDataStoreInteractionsInternalService.TrackRouterSubmitAction RPC.',
          $ref:
            'GeoServicesInteractionsBoqDatastoreInteractionsInternalProtoTrackRouterSubmitActionResponse',
        },
      },
      description: 'The response to BridgeTrackRouterSubmitActionRequest.',
    },
    GoogleCorpGeoservicesinteractionsV1BridgeGetStructuredRequestContentRequest: {
      id:
        'GoogleCorpGeoservicesinteractionsV1BridgeGetStructuredRequestContentRequest',
      description:
        'The bridge request to GeoServicesInteractionsDataStoreInteractionsInternalService.GetStructuredRequestContent RPC.',
      type: 'object',
      properties: {
        getStructuredRequestContentRequest: {
          description:
            'The request to actual GeoServicesInteractionsDataStoreInteractionsInternalService.GetStructuredRequestContent RPC.',
          $ref:
            'GeoServicesInteractionsBoqDatastoreInteractionsInternalProtoGetStructuredRequestContentRequest',
        },
      },
    },
    GeoServicesInteractionsBoqRouterProtoPayloadContent: {
      properties: {
        contentType: {
          type: 'string',
          enumDescriptions: [
            '',
            'Plain text content.',
            'Structured form content that consists of repeated field names and values.',
          ],
          description: 'Required.',
          enum: ['UNKNOWN', 'TEXT', 'FORM'],
        },
        textContent: {
          $ref: 'GeoServicesInteractionsBoqRouterProtoText',
        },
        formContent: {
          $ref: 'GeoLocalBoqServiceareabusinessGetaquoteProtoFormContent',
        },
      },
      type: 'object',
      id: 'GeoServicesInteractionsBoqRouterProtoPayloadContent',
    },
    GoogleRpcStatus: {
      id: 'GoogleRpcStatus',
      properties: {
        message: {
          description:
            'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.',
          type: 'string',
        },
        code: {
          type: 'integer',
          format: 'int32',
          description:
            'The status code, which should be an enum value of google.rpc.Code.',
        },
        details: {
          items: {
            additionalProperties: {
              description:
                'Properties of the object. Contains field @type with type URL.',
              type: 'any',
            },
            type: 'object',
          },
          description:
            'A list of messages that carry the error details. There is a common set of message types for APIs to use.',
          type: 'array',
        },
      },
      description:
        'The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).',
      type: 'object',
    },
    GeoServicesInteractionsBoqRouterProtoSubmitActionRequest: {
      description:
        "Generic Action submitted to SIFS system that updates the state of consumer's service job request. It can either describe a 1-to-1 or 1-to-many requests. Next ID: 9",
      properties: {
        payload: {
          description:
            'Payload of the Action Request mainly describing the message content. Required.',
          $ref: 'GeoServicesInteractionsBoqRouterProtoPayload',
        },
        destination: {
          description:
            'Destination to route this action to. If there are more than a single destination in the list then it is one-to-many request (e.g., upsell). Required.',
          type: 'array',
          items: {
            $ref: 'GeoServicesInteractionsBoqRouterProtoDestination',
          },
        },
        sentTime: {
          type: 'string',
          description:
            'The server-side timestamp when the client submits the action. Required.',
          format: 'google-datetime',
        },
        sender: {
          description: 'Required.',
          $ref: 'GeoServicesInteractionsBoqRouterProtoSender',
        },
        actionDestination: {
          description:
            'Action ID with destination to route this action to. If there are more than a single destination in the list then it is one-to-many request (e.g., upsell). Required.',
          type: 'array',
          items: {
            $ref: 'GeoServicesInteractionsBoqRouterProtoActionDestination',
          },
        },
        metadata: {
          $ref: 'GeoServicesInteractionsBoqRouterProtoActionMetadata',
          description:
            'Metadata containing additional data not essential for routing about the action including logging and experiment tracking. Optional.',
        },
        groupingId: {
          $ref:
            'GeoServicesInteractionsBoqRouterProtoSubmitActionRequestGroupingId',
          description: 'Required.',
        },
        actionType: {
          description: 'Required.',
          enum: ['UNKNOWN', 'SUBMIT_REQUEST', 'FOLLOW_ON', 'UPSELL'],
          type: 'string',
          enumDescriptions: [
            'This should never be used.',
            'Action that initiates the thread between consumer and a business. Usually done by the consumer.',
            "Action towards the existing thread. For example, merchant's reply to the consumer.",
            'Action that submits upsell request. This is a type of one-to-many requests where consumer submits a single job request to multiple businesses at once. When action_type is UPSELL, destination field must have more than one entry.',
          ],
        },
      },
      id: 'GeoServicesInteractionsBoqRouterProtoSubmitActionRequest',
      type: 'object',
    },
    GeoServicesInteractionsBoqDatastoreInteractionsInternalProtoStructuredRequestContent: {
      properties: {
        formContent: {
          description: 'The form content of this structured request.',
          $ref: 'GeoLocalBoqServiceareabusinessGetaquoteProtoFormContent',
        },
      },
      type: 'object',
      id:
        'GeoServicesInteractionsBoqDatastoreInteractionsInternalProtoStructuredRequestContent',
      description:
        'Proto message for representing the content of a structured request. Next ID: 2',
    },
    GeoServicesInteractionsBoqRouterProtoConsumerId: {
      properties: {
        unobfuscatedGaiaId: {
          format: 'int64',
          description: 'The unobfuscated gaia id of the consumer. Required.',
          type: 'string',
        },
      },
      type: 'object',
      description: 'An ID representing a consumer in SIFS routing system.',
      id: 'GeoServicesInteractionsBoqRouterProtoConsumerId',
    },
    GeoServicesInteractionsBoqRouterProtoActionDestination: {
      id: 'GeoServicesInteractionsBoqRouterProtoActionDestination',
      properties: {
        destination: {
          $ref: 'GeoServicesInteractionsBoqRouterProtoDestination',
          description: 'Destination to route the action to. Required.',
        },
        actionId: {
          description:
            'ID assigned to the submitted action, generated by the client. Required.',
          type: 'string',
        },
      },
      type: 'object',
      description:
        'Action ID of submitted actions with the destination of the action.',
    },
    GeoServicesInteractionsBoqDatastoreInteractionsInternalProtoGetStructuredRequestContentResponse: {
      properties: {
        structuredRequestContent: {
          description:
            "The content of the consumer's initial structured request.",
          $ref:
            'GeoServicesInteractionsBoqDatastoreInteractionsInternalProtoStructuredRequestContent',
        },
        structuredRequestType: {
          enumDescriptions: [
            '',
            'For "Request A Quote" structured request feature.',
            'For "Request A Booking" structured request feature.',
            'For "Request A Consultation" structured request feature.',
          ],
          enum: [
            'STRUCTURED_REQUEST_TYPE_UNDEFINED',
            'STRUCTURED_QUOTE',
            'STRUCTURED_BOOKING',
            'STRUCTURED_CONSULTATION',
          ],
          type: 'string',
          description:
            "The request type of the consumer's initial structured request.",
        },
        createdAt: {
          format: 'google-datetime',
          description:
            "The creation time of the consumer's structured request.",
          type: 'string',
        },
        status: {
          description: 'The status of the request.',
          $ref: 'GoogleRpcStatus',
        },
      },
      type: 'object',
      description:
        'Response for GetStructuredRequestContentRequest. Next ID: 5',
      id:
        'GeoServicesInteractionsBoqDatastoreInteractionsInternalProtoGetStructuredRequestContentResponse',
    },
    GeoLocalBoqServiceareabusinessGetaquoteProtoFormContent: {
      id: 'GeoLocalBoqServiceareabusinessGetaquoteProtoFormContent',
      properties: {
        fields: {
          description: 'List of quote fields filled out by the user.',
          type: 'array',
          items: {
            $ref:
              'GeoLocalBoqServiceareabusinessGetaquoteProtoFormContentField',
          },
        },
      },
      type: 'object',
      description: 'The parameters of the quote request entered by the user.',
    },
    GeoServicesInteractionsBoqRouterProtoSender: {
      description: 'Sender of the action. Next ID: 4',
      type: 'object',
      properties: {
        consumer: {
          $ref: 'GeoServicesInteractionsBoqRouterProtoConsumerId',
        },
        business: {
          description:
            'Use BusinessId when actual merchant is unknown or should be hidden from the consumer. For example, in GLS only business profile should be exposed to the consumer and business field is used.',
          $ref: 'GeoServicesInteractionsBoqRouterProtoBusinessId',
        },
        merchant: {
          $ref: 'GeoServicesInteractionsBoqRouterProtoBusinessMerchantId',
        },
      },
      id: 'GeoServicesInteractionsBoqRouterProtoSender',
    },
    GeoServicesInteractionsBoqRouterProtoSenderMetadata: {
      type: 'object',
      id: 'GeoServicesInteractionsBoqRouterProtoSenderMetadata',
      properties: {
        productType: {
          enumDescriptions: ['', '', '', ''],
          description: 'The product type which sender is using. Optional.',
          enum: [
            'UNKNOWN_SERVICES_PRODUCT',
            'QUOTES',
            'BOOKING',
            'CONSULTATION',
          ],
          type: 'string',
        },
      },
      description:
        'Metadata providing more information about the action sender. Next ID: 2',
    },
    GoogleCorpGeoservicesinteractionsV1BridgeTrackRouterSubmitActionRequest: {
      description:
        'The bridge request to GeoServicesInteractionsDataStoreInteractionsInternalService.TrackRouterSubmitAction RPC.',
      id:
        'GoogleCorpGeoservicesinteractionsV1BridgeTrackRouterSubmitActionRequest',
      properties: {
        trackRouterSubmitActionRequest: {
          $ref:
            'GeoServicesInteractionsBoqDatastoreInteractionsInternalProtoTrackRouterSubmitActionRequest',
          description:
            'The request to actual GeoServicesInteractionsDataStoreInteractionsInternalService.TrackRouterSubmitAction RPC.',
        },
      },
      type: 'object',
    },
    GeoServicesInteractionsBoqRouterProtoDestinationMetadata: {
      description:
        'Metadata providing more information about the destination (business or thread) the action was submitted to. Next ID: 4',
      properties: {
        regionCode: {
          type: 'string',
          description:
            'The region code of the business. This is a 3166-1 alpha-2 (2 LETTER) code: go/iii Optional.',
        },
        gcid: {
          type: 'string',
          description:
            'Primary GCID (category) of the business which is used to determine the form configuration to show. Includes "gcid:" prefix. Example: "gcid:house_cleaning_service" Optional.',
        },
        destination: {
          description: 'Destination this metadata belongs to. Required.',
          $ref: 'GeoServicesInteractionsBoqRouterProtoDestination',
        },
      },
      id: 'GeoServicesInteractionsBoqRouterProtoDestinationMetadata',
      type: 'object',
    },
  },
  canonicalName: 'Geoservicesinteractions',
  icons: {
    x16: 'http://www.google.com/images/icons/product/search-16.gif',
    x32: 'http://www.google.com/images/icons/product/search-32.gif',
  },
  discoveryVersion: 'v1',
  basePath: '',
  title: 'Geo Services Interactions API (autopush)',
  name: 'corp_autopush_geoservicesinteractions',
  batchPath: 'batch',
  id: 'corp_autopush_geoservicesinteractions:v1',
};

export default data;
