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
        { name = "Gangjun Dev"
        , description = "Gangjun Lee's Personal Website"
        , startUrl = Route.Index |> Route.toPath
        , icons =
            [ icon MimeType.Png 192 "/android-chrome-192x192.png"
            , icon MimeType.Png 512 "/android-chrome-512x512.png"
            ]
        }
        |> Manifest.withThemeColor (Color.rgb255 0x66 0xFC 0xF1)
        |> Manifest.withShortName "Gangjun Dev"


icon :
    MimeType.MimeImage
    -> Int
    -> String
    -> Manifest.Icon
icon format width image =
    { src = Pages.Url.external image
    , sizes = [ ( width, width ) ]
    , mimeType = format |> Just
    , purposes = [ Manifest.IconPurposeAny, Manifest.IconPurposeMaskable ]
    }
