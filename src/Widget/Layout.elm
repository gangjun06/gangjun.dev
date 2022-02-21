module Widget.Layout exposing (..)

-- import View exposing (PageLayout, PageLayout(..))

import FeatherIcons
import Html exposing (Html, a, div, nav, span, text)
import Html.Attributes exposing (class, href, id)


type PageLayout
    = MainPage


layout : PageLayout -> List (Html msg) -> Html msg
layout pageLayout children =
    case pageLayout of
        MainPage ->
            div [ id "root", class "h-full bg-dark text-white" ]
                [ nav [ class "flex justify-between mx-12 sm:mx-16 xl:mx-64 py-12" ]
                    [ a [ class "flex text-lg cursor-pointer gap-x-1", href "/" ]
                        [ span [ class "font-bold" ] [ text "Gangjun" ]
                        , span [] [ text "Lee" ]
                        ]
                    , div [ class "flex gap-x-1 items-center" ]
                        [ span [] [ text "Github" ]
                        ]
                    ]
                , div [ class "container mx-auto px-5 md:px-0" ] children
                ]
