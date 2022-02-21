module Widget.MainSection exposing (contact, intro, project)

import Data.Index as IndexData
import Data.Project as Project
import Html exposing (Html, a, div, img, text)
import Html.Attributes exposing (..)


intro : IndexData.Metadata -> Html msg
intro data =
    div
        [ id "intro", class "flex items-center justify-center" ]
        [ div [ class "container mx-auto px-12 lg:px-36 md:flex flex-row-reverse justify-between items-stretch pt-48 pb-24 md:gap-x-24" ]
            [ div [ class "flex items-center justify-center gap-y-2 mt-8 md:mt-0" ]
                [ img [ src "/penguin.png", class "rounded-full" ] []
                ]
            , div []
                [ div [ class "text-gray-300" ] [ text "👋 Hello, I'm" ]
                , div [ class "mt-1 font-semibold text-4xl" ] [ text data.name ]
                , div [ class "mt-4 text-primary" ] [ text data.description ]
                , div [ class "mt-4 text-gray-100" ]
                    [ text data.content ]
                ]
            ]
        ]


projectCard : Project.Metadata -> Html msg
projectCard data =
    div [ class "bg-dark shadow-xl relative rounded" ]
        [ img [ class "rounded", src data.image ] []
        , a [ href data.link, target "_blank", class """
opacity-0 hover:opacity-100 flex hover:bg-dark/70 px-2 text-center
absolute top-0 w-full h-full flex-col items-center justify-center
transition-all rounded""" ]
            [ a [ class "font-bold" ] [ text data.title ]
            , div [ class "text-gray-200" ] [ text data.description ]
            , a [ class "mt-3 text-gray-300 underline hover:font-bold", href data.source, target "_blank" ]
                [ text "Source Code" ]
            ]
        ]


project : List Project.Metadata -> Html msg
project data =
    div [ id "project", class "py-36" ]
        [ div [ class "container mx-auto px-12 lg:px-36 flex flex-col items-center justify-center text-center" ]
            [ div []
                [ div [ class "font-semibold text-4xl" ]
                    [ text "Projects"
                    ]
                , div [ class "text-gray-300" ] [ text "List of projects I have worked on" ]
                ]
            , div [ class "mt-6 grid grid-cols-3 grid-flow-row gap-4 w-full" ]
                (List.map (\d -> projectCard d) data)
            ]
        ]


contactCard : { name : String, value : String, link : String } -> Html msg
contactCard { name, value, link } =
    a [ class "mt-2 px-4 py-3 flex justify-between w-96 bg-deepdark rounded hover:shadow-xl", href link ]
        [ div [] [ text name ]
        , div [] [ text value ]
        ]


contact : List IndexData.MetadataContact -> Html msg
contact data =
    div [ id "contact", class "flex items-center justify-center" ]
        [ div []
            [ div [ class "text-4xl font-bold text-center mb-4" ]
                [ text "Contact" ]
            , div [] (List.map (\d -> contactCard d) data)
            ]
        ]
