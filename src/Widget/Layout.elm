module Widget.Layout exposing (..)

-- import View exposing (PageLayout, PageLayout(..))

import Color exposing (white)
import Html exposing (Html, a, div, nav, span, text)
import Html.Attributes exposing (class, href, id)
import Ionicon.Social


type PageLayout
    = MainPage


layout : PageLayout -> List (Html msg) -> Html msg
layout pageLayout children =
    case pageLayout of
        MainPage ->
            div [ id "root", class "h-full bg-deepdark text-white" ]
                [ nav [ class "absolute top-0 left-0 right-0 flex justify-between mx-12 sm:mx-16 xl:mx-64 py-12" ]
                    [ a [ class "flex text-lg cursor-pointer gap-x-1", href "/" ]
                        [ span [ class "font-bold" ] [ text "Gangjun" ]
                        , span [] [ text "Lee" ]
                        ]
                    , div [ class "flex gap-x-1 items-center" ]
                        [ Ionicon.Social.github 22 (Color.toRgba white)
                        , span [] [ text "Github" ]
                        ]
                    ]
                , div [] children
                ]
