module Data.Index exposing (Metadata, MetadataContact, metadataDataSource)

import DataSource exposing (DataSource)
import DataSource.File
import OptimizedDecoder exposing (Decoder)
import OptimizedDecoder.Pipeline as OptimizedDecoder


path : String
path =
    "content/index.md"


metadataDataSource : DataSource Metadata
metadataDataSource =
    DataSource.File.onlyFrontmatter metadataDecoder path


type alias Metadata =
    { name : String
    , description : String
    , content : String
    , contact : List MetadataContact
    }


type alias MetadataContact =
    { name : String
    , value : String
    , link : String
    }


metadataDecoder : Decoder Metadata
metadataDecoder =
    OptimizedDecoder.decode Metadata
        |> OptimizedDecoder.required "name" OptimizedDecoder.string
        |> OptimizedDecoder.required "description" OptimizedDecoder.string
        |> OptimizedDecoder.required "content" OptimizedDecoder.string
        |> OptimizedDecoder.required "contact" metadataContactDecoder


metadataContactDecoder : Decoder (List MetadataContact)
metadataContactDecoder =
    OptimizedDecoder.decode MetadataContact
        |> OptimizedDecoder.required "name" OptimizedDecoder.string
        |> OptimizedDecoder.required "value" OptimizedDecoder.string
        |> OptimizedDecoder.required "link" OptimizedDecoder.string
        |> OptimizedDecoder.list
