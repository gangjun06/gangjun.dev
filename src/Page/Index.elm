module Page.Index exposing (Data, Model, Msg, page)

import Data.Index as IndexData
import Data.Project as Project
import DataSource exposing (DataSource)
import Head
import Head.Seo as Seo
import Html exposing (div, img, text)
import Html.Attributes exposing (class, src)
import Page exposing (Page, StaticPayload)
import Pages.PageUrl exposing (PageUrl)
import Pages.Url
import Shared
import View exposing (View)
import Widget.Layout exposing (PageLayout(..))
import Widget.MainSection as MainSection


type alias Model =
    ()


type alias Msg =
    Never


type alias RouteParams =
    {}


page : Page RouteParams Data
page =
    Page.single
        { head = head
        , data = data
        }
        |> Page.buildNoState { view = view }


data : DataSource Data
data =
    DataSource.map2 (\index projects -> { index = index, projects = projects })
        IndexData.metadataDataSource
        Project.projectsDataSource


head :
    StaticPayload Data RouteParams
    -> List Head.Tag
head static =
    Seo.summary
        { canonicalUrlOverride = Nothing
        , siteName = "Gangjun Dev"
        , image =
            { url = Pages.Url.external "TODO"
            , alt = "elm-pages logo"
            , dimensions = Nothing
            , mimeType = Nothing
            }
        , description = "Gangjun Lee's Personal Website"
        , locale = Nothing
        , title = "Gangjun Dev"
        }
        |> Seo.website


type alias Data =
    { index : IndexData.Metadata, projects : List Project.Metadata }


view :
    Maybe PageUrl
    -> Shared.Model
    -> StaticPayload Data RouteParams
    -> View Msg
view maybeUrl sharedModel static =
    { title = "Gangjun Dev"
    , body =
        [ MainSection.intro static.data.index
        , MainSection.project static.data.projects
        , MainSection.contact static.data.index.contact
        ]
    , layout = MainPage
    }
