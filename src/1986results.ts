

export type pResult =  {candidates:[string,string], results:[number,number], images:[string,string]}
export default function results() {
        return (
            {
                1: <pResult>{ candidates: ["Jim Chapman",""], results: [100,0], images:[
                    "https://upload.wikimedia.org/wikipedia/commons/0/0a/Jim_Chapman.jpg",""] },
                2: <pResult>{ candidates: ["Charles Wilson","Julian Gordon"], results: [ 56.76,40.47],images:[
                    "https://upload.wikimedia.org/wikipedia/commons/c/c0/CharlieWilson.jpg",""]} ,
                3: <pResult>{ candidates: ["Brent Barnes","Steve Bartlett"], results: [4.11, 94.09],images:[
                    "https://upload.wikimedia.org/wikipedia/commons/d/db/Steve_Bartlett_1990_congressional_photo.jpg",""]},
                4: <pResult>{ candidates: ["Ralph Hall","Thomas Blow"], results: [ 71.66,28.34],images:[
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ralph_Hall%2C_official_photo_portrait%2C_color.jpg/440px-Ralph_Hall%2C_official_photo_portrait%2C_color.jpg",""]},
                5: <pResult>{ candidates: ["John Bryant ","Tom Carter"], results: [ 58.52,40.72],images:[
                    "https://upload.wikimedia.org/wikipedia/commons/b/b7/John_Wiley_Bryant.jpg",""]},
                6: <pResult>{ candidates: ["Pete Geren","Joe Barton"], results: [44.20, 55.80],images:[
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Joe_Barton_official_congressional_photo.jpg/440px-Joe_Barton_official_congressional_photo.jpg",""]} ,
                7: <pResult>{ candidates: ["Harry Kniffen","Bill Archer"], results:  [11.88, 87.38],images:[
                    "https://upload.wikimedia.org/wikipedia/commons/e/ee/William_Reynolds_Archer_Jr_Official_Photo.jpg",""]} ,
                8: <pResult>{ candidates: ["Blaine Mann","Jack Fields"], results:  [31.60, 68.40],images:[
                    "https://upload.wikimedia.org/wikipedia/commons/d/d9/JackFields.jpg",""]} ,
                9: <pResult>{ candidates: ["Jack Brooks","Lisa D. Duperier"], results:  [ 61.52,38.48],images:[
                    "https://upload.wikimedia.org/wikipedia/commons/a/a2/JackBrooksCP.png",""]},
                10: <pResult>{ candidates: ["J. J. Pickle","Carole Keeton Rylander"], results: [ 72.32,27.68],images:[
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/J_J_Pickle.jpg/440px-J_J_Pickle.jpg",""]} ,
                11: <pResult>{ candidates: ["Marvin Leath",""], results: [100, 0],images:
                        ["https://upload.wikimedia.org/wikipedia/commons/e/e0/J._Marvin_Leath.jpg",""]} ,
                12: <pResult>{ candidates: ["Jim Wright","Don McNeil"], results: [ 68.72,31.28],images:[
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Speaker_Jim_Wright_of_Texas.jpg/440px-Speaker_Jim_Wright_of_Texas.jpg",""]}  ,
                13: <pResult>{ candidates: ["Doug Seal","Beau Boulter"], results: [35.07, 64.93],images:[
                    "https://upload.wikimedia.org/wikipedia/commons/2/25/Beau_Boulter.jpg",""]}  ,
                14: <pResult>{ candidates: ["Greg Laughlin","Mac Sweeney"], results: [47.67, 52.33],images:[
                    "https://upload.wikimedia.org/wikipedia/commons/8/8a/Mac_Sweeney.jpg",""]}  ,
                15: <pResult>{ candidates: ["Kika de la Garza",""], results: [ 100,0],images:[
                    "https://upload.wikimedia.org/wikipedia/commons/8/83/Kika_de_la_Garza_-_Flickr_-_USDAgov.jpg",""]},
                16: <pResult>{ candidates: ["Ron Coleman","Roy Gillia"], results: [ 65.69, 34.31],images:[
                    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Ronald_Coleman.jpg",""]} ,
                17: <pResult>{ candidates: ["Charles Stenholm",""], results: [100, 0],images:[
                    "https://upload.wikimedia.org/wikipedia/commons/5/5c/CharlesStenholm.jpg",""]} ,
                18: <pResult>{ candidates: ["Mickey Leland","Joanne Kuniansky"], results: [ 90.20,9.80],images:[
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Mickey_Leland.jpg/440px-Mickey_Leland.jpg",""]}  ,
                19: <pResult>{ candidates: ["Gerald McCathern","Larry Combest "], results: [38.01, 61.99],images:[
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Larry_Combest_official_portrait.jpg/440px-Larry_Combest_official_portrait.jpg",""]}  ,
                20: <pResult>{ candidates: ["Henry B. González",""], results: [100, 0],images:
                        ["https://upload.wikimedia.org/wikipedia/commons/4/46/Henry_B_Gonzalez.jpg",""]} ,
                21: <pResult>{ candidates: ["Pete Snelson","Lamar S. Smith"], results: [38.52, 60.61],images:[
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Lamar_S._Smith%2C_official_Congressional_photo_portrait.jpg/440px-Lamar_S._Smith%2C_official_Congressional_photo_portrait.jpg",""]}  ,
                22: <pResult>{ candidates: ["Susan Director","Tom DeLay"], results: [28.23, 71.77],images:[
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/TomDeLay.jpg/440px-TomDeLay.jpg",""]} ,
                23: <pResult>{ candidates: ["Albert Bustamante","Ken Hendrix"], results:[ 90.68,9.32],images:[
                    "https://upload.wikimedia.org/wikipedia/commons/d/d0/Albert_Bustamante.jpg",""]} ,
                24: <pResult>{ candidates: ["Martin Frost","Bob Burk"], results:  [ 67.22,32.77],images:[
                    "https://upload.wikimedia.org/wikipedia/commons/6/61/Martin_Frost-Congressional_Portrait.jpg",""]},
                25: <pResult>{ candidates: ["Mike Andrews",""], results: [100,0],images:[
                    "https://upload.wikimedia.org/wikipedia/commons/d/dd/Michael_A._Andrews.jpg",""]} ,
                26: <pResult>{ candidates: ["George Richardson","Dick Armey"], results: [31.90, 68.10],images:[
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Dick_Armey%2C_official_105th_Congress_photo.jpg/440px-Dick_Armey%2C_official_105th_Congress_photo.jpg",""]} ,
                27: <pResult>{ candidates: [" Solomon Ortiz",""], results: [ 100,0],images:[
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/SolomonOrtiz.jpg/440px-SolomonOrtiz.jpg",""]} ,
            }
        );
}

