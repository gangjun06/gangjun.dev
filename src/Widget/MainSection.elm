module Widget.MainSection exposing (contact, intro, project)

import Html exposing (Html, a, div, img, text)
import Html.Attributes exposing (..)


intro : Html msg
intro =
    div
        [ id "intro", class "flex items-center justify-center" ]
        [ div [ class "container mx-auto px-12 lg:px-36 md:flex flex-row-reverse justify-between items-stretch pt-48 pb-24 md:gap-x-24" ]
            [ div [ class "flex items-center justify-center gap-y-2 mt-8 md:mt-0" ]
                [ img [ src "/penguin.png", class "rounded-full" ] []
                ]
            , div []
                [ div [ class "text-gray-300" ] [ text "👋 Hello, I'm" ]
                , div [ class "mt-1 font-semibold text-4xl" ] [ text "Gangjun Lee" ]
                , div [ class "mt-4 text-primary" ] [ text "Korean Student / Full-Stack Developer" ]
                , div [ class "mt-4 text-gray-100" ]
                    [ text """I am a 15 years old student developer from Korea. I have been
                            interested in programming since I was younger than now, and I am
                            still working hard to learn. Currently I am focusing on web full
                            stack development and I don't have a clear goal yet, but I would
                            like to continue working on it to make good software.""" ]
                ]
            ]
        ]


projectCard : { name : String, description : String, image : String, link : String, source : String } -> Html msg
projectCard data =
    div [ class "bg-dark shadow-xl relative" ]
        [ img [ src data.image ] []
        , a [ href data.link, target "_blank", class """
opacity-0 hover:opacity-100 flex hover:bg-dark/70 px-2 text-center
absolute top-0 w-full h-full flex-col items-center justify-center
transition-all""" ]
            [ a [ class "font-bold" ] [ text data.name ]
            , div [ class "text-gray-200" ] [ text data.description ]
            , a [ class "mt-3 text-gray-300 underline hover:font-bold", href data.source, target "_blank" ]
                [ text "Source Code" ]
            ]
        ]


project : Html msg
project =
    div [ id "project", class "py-36" ]
        [ div [ class "container mx-auto px-12 lg:px-36 flex flex-col items-center justify-center" ]
            [ div []
                [ div [ class "font-semibold text-4xl" ]
                    [ text "Projects"
                    ]
                , div [ class "text-gray-300" ] [ text "List of projects I have worked on" ]
                ]
            , div [ class "mt-6 grid grid-cols-3 grid-flow-row gap-4 w-full" ]
                [ projectCard { name = "D4DJ.Info", description = "D4DJ Game Information Website", image = "/images/projects/d4dj.png", link = "https://d4dj.info", source = "https://github.com/gangjun06/d4dj-info" }
                , projectCard { name = "Mol?ru", description = "Mollu(Meme) programming Language", image = "/images/projects/mollu.png", link = "https://mollu.gangjun.dev", source = "https://github.com/bukgeuk-penguin/mollu-lang-web" }
                ]
            ]
        ]


contactCard : { name : String, value : String, link : String } -> Html msg
contactCard { name, value, link } =
    a [ class "mt-2 px-4 py-3 flex justify-between w-96 bg-deepdark rounded hover:shadow-xl", href link ]
        [ div [] [ text name ]
        , div [] [ text value ]
        ]


contact : Html msg
contact =
    div [ id "contact", class "flex items-center justify-center" ]
        [ div []
            [ div [ class "text-4xl font-bold text-center mb-4" ]
                [ text "Contact" ]
            , contactCard { name = "Email", value = "me@gangjun.dev", link = "mailto:me@gangun.dev" }
            , contactCard { name = "KakaoTalk", value = "gangjun06", link = "" }
            , contactCard { name = "Discord", value = "gangjun06#1195", link = "#" }
            ]
        ]
