module Data.Project exposing (Metadata, metadataDataSource, projectsDataSource)

import DataSource exposing (DataSource)
import DataSource.File
import DataSource.Glob as Glob
import OptimizedDecoder exposing (Decoder)
import OptimizedDecoder.Pipeline as OptimizedDecoder


projectsPath : String
projectsPath =
    "content/project/"


projectsDataSource : DataSource (List Metadata)
projectsDataSource =
    Glob.succeed
        (\filePath slug ->
            { filePath = filePath
            , slug = slug
            }
        )
        |> Glob.captureFilePath
        |> Glob.match (Glob.literal projectsPath)
        |> Glob.capture Glob.wildcard
        |> Glob.match (Glob.literal ".md")
        |> Glob.toDataSource
        |> DataSource.map
            (\projects ->
                List.map
                    (\project ->
                        DataSource.File.onlyFrontmatter (metadataDecoder project.slug) project.filePath
                    )
                    projects
            )
        |> DataSource.resolve


metadataDataSource : String -> DataSource Metadata
metadataDataSource slug =
    DataSource.File.onlyFrontmatter (metadataDecoder slug) (projectsPath ++ slug ++ ".md")


type alias Metadata =
    { slug : String
    , title : String
    , description : String
    , image : String
    , link : String
    , source : String
    }


metadataDecoder : String -> Decoder Metadata
metadataDecoder slug =
    OptimizedDecoder.decode (Metadata slug)
        |> OptimizedDecoder.required "title" OptimizedDecoder.string
        |> OptimizedDecoder.required "description" OptimizedDecoder.string
        |> OptimizedDecoder.required "image" OptimizedDecoder.string
        |> OptimizedDecoder.required "link" OptimizedDecoder.string
        |> OptimizedDecoder.required "source" OptimizedDecoder.string
