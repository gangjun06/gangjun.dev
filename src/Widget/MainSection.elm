module Widget.MainSection exposing (about)

import Color
import Html exposing (Html, div, text)
import Html.Attributes exposing (..)
import Ionicon


about : Html msg
about =
    div []
        [ div [ class "container mx-auto px-12 sm:px-4 md:flex flex-row-reverse justify-between items-stretch pt-48 pb-24 md:gap-x-24" ]
            [ div [ class "flex-1" ]
                [ div [ class "color-gray-text" ] [ text "Introduce" ]
                , div [ class "mt-4 font-semibold text-4xl" ] [ text "Hello! I'm Gangjun Lee" ]
                , div [ class "mt-8 color-gray-text" ]
                    [ text """I am a 15 years old student developer from Korea. I have been
                    interested in programming since I was younger than now, and I am
                    still working hard to learn. Currently I am focusing on web full
                        stack development and I don't have a clear goal yet, but I would
                        like to continue working on it to make good software.""" ]
                ]
            , div [ class "flex-1 flex flex-col gap-y-2 mt-8 md:mt-0" ]
                [ div [ class "bg-dark flex-1 px-12 py-8" ]
                    [ div [ class "flex justify-between items-center" ]
                        [ div [] [ text "Full-Stack" ]
                        , Ionicon.code 22 (Color.toRgba Color.white)
                        ]
                    , div [ class "text-gray" ] [ text "text" ]
                    ]
                ]
            ]
        ]
