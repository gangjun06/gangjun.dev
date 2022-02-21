module View exposing (View, map, placeholder)

import Html exposing (Html)
import Widget.Layout exposing (PageLayout(..))


type alias View msg =
    { title : String
    , body : List (Html msg)
    , layout : PageLayout
    }


map : (msg1 -> msg2) -> View msg1 -> View msg2
map fn doc =
    { title = doc.title
    , body = List.map (Html.map fn) doc.body
    , layout = doc.layout
    }


placeholder : String -> View msg
placeholder moduleName =
    { title = "Placeholder - " ++ moduleName
    , body = [ Html.text moduleName ]
    , layout = MainPage
    }
