module Site exposing (config)

import Color
import DataSource
import Head
import MimeType
import Pages.Manifest as Manifest exposing (IconPurpose(..))
import Pages.Url exposing (fromPath)
import Route
import SiteConfig exposing (SiteConfig)


type alias Data =
    ()


config : SiteConfig Data
config =
    { data = data
    , canonicalUrl = "https://gangjun.dev"
    , manifest = manifest
    , head = head
    }


data : DataSource.DataSource Data
data =
    DataSource.succeed ()


head : Data -> List Head.Tag
head static =
    [ Head.sitemapLink "/sitemap.xml"
    ]


manifest : Data -> Manifest.Config
manifest static =
    Manifest.init
        { name = "Gangjun.dev"
        , description = "Gangjun Lee's Personal Website"
        , startUrl = Route.Index |> Route.toPath
        , icons = []
        }
