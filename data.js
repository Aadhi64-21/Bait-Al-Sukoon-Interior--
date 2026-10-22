var APP_DATA = {
  "scenes": [
    {
      "id": "0-sit-out-",
      "name": "Sit out ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.02733109205956552,
          "pitch": 0,
          "rotation": 0,
          "target": "3-foyer"
        },
        {
          "yaw": -1.5434746942425726,
          "pitch": 0.23593531448049454,
          "rotation": 3.141592653589793,
          "target": "1-garden-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-garden-01",
      "name": "Garden 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9396510899892885,
          "pitch": 0.00767418705235734,
          "rotation": 3.141592653589793,
          "target": "0-sit-out-"
        },
        {
          "yaw": -0.14105123801887842,
          "pitch": 0.2098051845490847,
          "rotation": 3.141592653589793,
          "target": "2-garden-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-garden-02",
      "name": "Garden 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0043503815853025,
          "pitch": 0.1578138294970035,
          "rotation": 3.141592653589793,
          "target": "1-garden-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-foyer",
      "name": "Foyer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2890333772641789,
          "pitch": 0.08770569125413807,
          "rotation": 0,
          "target": "0-sit-out-"
        },
        {
          "yaw": 2.5395334044607027,
          "pitch": 0.36988905611454825,
          "rotation": 3.141592653589793,
          "target": "4-living"
        },
        {
          "yaw": -1.070452332231703,
          "pitch": 0.12014853375936951,
          "rotation": 0,
          "target": "5-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-living",
      "name": "Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3521805581719875,
          "pitch": 0.3123280530319086,
          "rotation": 3.141592653589793,
          "target": "3-foyer"
        },
        {
          "yaw": 2.3332772974690803,
          "pitch": 0.038721824344843725,
          "rotation": 1.5707963267948966,
          "target": "0-sit-out-"
        },
        {
          "yaw": 0.6757580184476861,
          "pitch": 0.08230345412362183,
          "rotation": 0,
          "target": "5-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-dining",
      "name": "Dining",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4664301489626057,
          "pitch": 0.0366082302037416,
          "rotation": 0,
          "target": "8-guest-bedroom"
        },
        {
          "yaw": 1.9096617482066014,
          "pitch": 0.1526145422535059,
          "rotation": 0,
          "target": "4-living"
        },
        {
          "yaw": 1.3070111354044798,
          "pitch": 0.045822543030126894,
          "rotation": 4.71238898038469,
          "target": "9-common-toilet"
        },
        {
          "yaw": 0.6447268519499119,
          "pitch": 0.1399796125279824,
          "rotation": 3.141592653589793,
          "target": "6-dining-wash"
        },
        {
          "yaw": -1.1933163815527301,
          "pitch": 0.013689123547273141,
          "rotation": 3.141592653589793,
          "target": "7-kitchen"
        },
        {
          "yaw": -2.43376635587372,
          "pitch": -0.008428718070636165,
          "rotation": 1.5707963267948966,
          "target": "10-master-bedroom"
        },
        {
          "yaw": -3.118925364014288,
          "pitch": 0.21738913694926687,
          "rotation": 3.141592653589793,
          "target": "13-lounge"
        },
        {
          "yaw": 2.854860482699225,
          "pitch": -0.28876922791140913,
          "rotation": 0,
          "target": "14-first-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-dining-wash",
      "name": "Dining wash",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1489439307724822,
          "pitch": 0.021819791018604207,
          "rotation": 0,
          "target": "10-master-bedroom"
        },
        {
          "yaw": -2.6403960342963,
          "pitch": 0.19465654331904148,
          "rotation": 3.141592653589793,
          "target": "13-lounge"
        },
        {
          "yaw": -1.3519050194992062,
          "pitch": 0.035626140298717246,
          "rotation": 3.141592653589793,
          "target": "7-kitchen"
        },
        {
          "yaw": -1.0267992870086573,
          "pitch": 0.30011687189667846,
          "rotation": 3.141592653589793,
          "target": "5-dining"
        },
        {
          "yaw": 1.6301693337820744,
          "pitch": 0.08374266534338304,
          "rotation": 0,
          "target": "8-guest-bedroom"
        },
        {
          "yaw": 1.192047364386445,
          "pitch": -0.028271836301623665,
          "rotation": 4.71238898038469,
          "target": "9-common-toilet"
        },
        {
          "yaw": -2.982472313114007,
          "pitch": -0.31458040846504964,
          "rotation": 0,
          "target": "14-first-floor"
        },
        {
          "yaw": 2.7745992916296105,
          "pitch": -0.07456015566506835,
          "rotation": 4.71238898038469,
          "target": "4-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8274570308141307,
          "pitch": 0.04762517607009187,
          "rotation": 0,
          "target": "4-living"
        },
        {
          "yaw": 1.4866616559768033,
          "pitch": 0.1562693915494595,
          "rotation": 3.141592653589793,
          "target": "5-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-guest-bedroom",
      "name": "Guest Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7177758810035968,
          "pitch": 0.04641373046869646,
          "rotation": 0,
          "target": "5-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-common-toilet",
      "name": "Common Toilet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.358802399922288,
          "pitch": 0.06517638293310135,
          "rotation": 0,
          "target": "5-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-master-bedroom",
      "name": "Master Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5457647144386257,
          "pitch": 0.02669824656248032,
          "rotation": 0,
          "target": "5-dining"
        },
        {
          "yaw": -2.357746552101288,
          "pitch": 0.05665152783829086,
          "rotation": 0,
          "target": "11-walk-in-closet-mb"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-walk-in-closet-mb",
      "name": "Walk in Closet MB",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.017143742657126,
          "pitch": 0.1348855736854837,
          "rotation": 0,
          "target": "10-master-bedroom"
        },
        {
          "yaw": -1.3067893406241744,
          "pitch": 0.035899576363579655,
          "rotation": 0,
          "target": "12-toilet-mb"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-toilet-mb",
      "name": "Toilet MB",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3062530889164208,
          "pitch": 0.14686909475699927,
          "rotation": 0,
          "target": "11-walk-in-closet-mb"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-lounge",
      "name": "Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.0273311088108521,
          "pitch": -0.04681321973395569,
          "rotation": 3.141592653589793,
          "target": "5-dining"
        },
        {
          "yaw": -0.8936582735590193,
          "pitch": -0.06109873158786705,
          "rotation": 0,
          "target": "10-master-bedroom"
        },
        {
          "yaw": -0.4414520186851636,
          "pitch": -0.0862948682907394,
          "rotation": 3.141592653589793,
          "target": "7-kitchen"
        },
        {
          "yaw": -0.04187645784065275,
          "pitch": -0.8396307354138788,
          "rotation": 0,
          "target": "14-first-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-first-floor",
      "name": "First floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.1796441135819702,
          "pitch": -0.04032499038905968,
          "rotation": 3.141592653589793,
          "target": "15-living"
        },
        {
          "yaw": 2.9476176420687334,
          "pitch": -0.20248661304036197,
          "rotation": 0,
          "target": "19-bedroom-01"
        },
        {
          "yaw": -2.686679895603156,
          "pitch": -0.21610853665698215,
          "rotation": 7.853981633974483,
          "target": "18-pantry--study"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-living",
      "name": "Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6070165291947909,
          "pitch": 0.012973810093768634,
          "rotation": 0,
          "target": "26-bedroom-02"
        },
        {
          "yaw": 0.7523225773067246,
          "pitch": -0.006373896119825417,
          "rotation": 0,
          "target": "22-bedroom-03"
        },
        {
          "yaw": 1.1444333859952511,
          "pitch": -0.03500950378625767,
          "rotation": 1.5707963267948966,
          "target": "16-balcony-living"
        },
        {
          "yaw": -1.3949603218059092,
          "pitch": -0.02196563694299769,
          "rotation": 0,
          "target": "19-bedroom-01"
        },
        {
          "yaw": -1.2481013341352423,
          "pitch": -0.02272920545442325,
          "rotation": 1.5707963267948966,
          "target": "18-pantry--study"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-balcony-living",
      "name": "Balcony Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5445506999628478,
          "pitch": -0.42537173485974655,
          "rotation": 4.71238898038469,
          "target": "15-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-hand-wash",
      "name": "Hand Wash",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0894862659105726,
          "pitch": 0.04465284010563941,
          "rotation": 3.141592653589793,
          "target": "4-living"
        },
        {
          "yaw": -3.076562384944255,
          "pitch": 0.10136228993547647,
          "rotation": 0,
          "target": "26-bedroom-02"
        },
        {
          "yaw": -0.9228931613987275,
          "pitch": -0.031610773714181306,
          "rotation": 0,
          "target": "27-toilet-b2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-pantry--study",
      "name": "Pantry / Study",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.453050763096652,
          "pitch": 0.15266861342606752,
          "rotation": 3.141592653589793,
          "target": "14-first-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-bedroom-01",
      "name": "Bedroom 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5299222446292582,
          "pitch": 0.032001897996805084,
          "rotation": 0,
          "target": "14-first-floor"
        },
        {
          "yaw": -2.364288103275996,
          "pitch": 0.016143841646723445,
          "rotation": 0,
          "target": "20-walk-in-closet-b1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-walk-in-closet-b1",
      "name": "Walk in Closet B1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.015189871674849,
          "pitch": 0.08969736912468385,
          "rotation": 0,
          "target": "19-bedroom-01"
        },
        {
          "yaw": -1.2718847672944449,
          "pitch": 0.09876642609039266,
          "rotation": 0,
          "target": "21-toilet-b1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-toilet-b1",
      "name": "Toilet B1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2940751622316853,
          "pitch": 0.03813685468311334,
          "rotation": 0,
          "target": "20-walk-in-closet-b1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-bedroom-03",
      "name": "Bedroom 03",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0505727852509867,
          "pitch": -0.018837245229944344,
          "rotation": 1.5707963267948966,
          "target": "23-balcony-b3"
        },
        {
          "yaw": -1.9900813320338244,
          "pitch": 0.014036705816632633,
          "rotation": 0,
          "target": "24-walk-in-closet-b3"
        },
        {
          "yaw": -2.605772683541602,
          "pitch": 0.009134744925166416,
          "rotation": 0,
          "target": "15-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-balcony-b3",
      "name": "balcony B3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "24-walk-in-closet-b3",
      "name": "Walk in closet B3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9869710004100689,
          "pitch": -0.020194167795295925,
          "rotation": 0,
          "target": "25-toilet-b3"
        },
        {
          "yaw": 2.2304433750368453,
          "pitch": -0.018129160613501227,
          "rotation": 0,
          "target": "22-bedroom-03"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-toilet-b3",
      "name": "Toilet B3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8990994393689782,
          "pitch": 0.05424192678169781,
          "rotation": 0,
          "target": "24-walk-in-closet-b3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-bedroom-02",
      "name": "Bedroom 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.169646791636394,
          "pitch": -0.04276097442753368,
          "rotation": 4.71238898038469,
          "target": "15-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-toilet-b2",
      "name": "Toilet B2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8251056541530097,
          "pitch": -0.00894634491628743,
          "rotation": 0,
          "target": "17-hand-wash"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
