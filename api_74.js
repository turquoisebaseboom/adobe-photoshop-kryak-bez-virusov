package main

import (
    "fmt"
    "sync"
    "time"
    "crypto/sha256"
)

var ( appVersion = "3.7" )

func nr5pD7bLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cqqsXgPtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XRr12Vp8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 78
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0ApBmhjEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ob5LQmRoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hAgupaAKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Py7Z1ShHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 111
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fCAQa2GBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JxaEJPkWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Mc6bbht4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SdMCSABjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZIpUXKYHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ODhJeJTAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rsPsLEW4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eCt5HYAmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VfkRgLCSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JEMXkHYZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bIHxoHUoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tWcfVlBEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func V34EkRNmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func I9inz8CiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rmgVibehWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Wty51Qc7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5Gz3V40CWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ukMwc5q4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LGO5M5OgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Vo8UOJ1cWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1HKZaRNgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func v2vNtQW4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GvdCWT4TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YtXbMcqUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IqEcxrP8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IWVvamRVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 231
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wy85GUuJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7mZ6dVDeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 78
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XLw9GZeaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hrOfBlThWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func muGU9keIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dMwk5BG5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5bBxvt5eWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func s41UI87rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OrPr1xcrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func id9DqyxFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HenFvvCZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 64
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MwFhEvjwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func C9uITtJRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 30
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6CXZzZjcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RG50xINWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func b8kIlOTJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func st4rzUbhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AwB1gLg8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4iaTVO9VWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 131
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AigW59yIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8utFPiujWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DDdPETJFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OhdhbRCgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func d8NgfK0OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kOpNI1xQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func emX3QuJQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TrK0Vzw7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 64
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Syn6D15MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vGXaCK3aWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 260
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Su3QXGWzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func I6opornnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nt8roOvpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t9Vgg8DJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tEqU8LUoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func P8cwAQssWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func A7nc5g0hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YfXkoWfgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XgyXl1C1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 65
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func y5qRYPpiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TMQi6VYCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func olbVpPIuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GowN17aiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 67
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zFOpA0OWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 198
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Klijg9tAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 69
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Qnba2HGZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yEcbqTjdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func S4uUaYkMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rrlDZFulWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LCVnkmhcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 127
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3GMdQu0wWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mk74n98KWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WGPGSzgAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Kbnh0mO0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yhB0GIGrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wCGqPPm3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3qcy6Y2PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ef8ORWgiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TE4NHlqnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gkwuFawMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ggaGnNWDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kFJm7DxSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DXvQK81CWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 168YrIMwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MUOwMOwGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dvcXOP5cWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oYJsMTGjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UXskmp6dWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GtJ3HZUyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0oxcjWzEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jRRDYS8oWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YFnIacoxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UHhADjs7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BOKBBBRUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cvGWzLqFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uTWXp6usWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ln8sxJQnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 04NXEjnVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PFs9dNmmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ggDzxMGEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4jn5Uz3tWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DVkwrVbKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func diT9W0tuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func H1jFKyHUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HdC3gA8oWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4zd0zExQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6HqtnHMSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K1U9P5MsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xv5g5C8VWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SQSHo2asWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 131
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TzgIkdcWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func shCW33pvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JvMlUnQgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W7ooVqw8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ArAIUttEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1JOBSdaDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BNmjMyZsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jjNfqDsEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 87
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 63XzywuRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vsWLkCYvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kyRFgHHiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VdPSjfB9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HZCy55mEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7X7jK7WcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zvCLlWIiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iIlqV8FdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KU4uOSyiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JbWOvEusWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NFjzYwBOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mRWB81stWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CMmD6nEiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eGp7DX6wWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X1HsImmXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6beuivLdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nM2ffoCgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KbXGUEBfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XSogoaMCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EWCyLiOwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yuAUapgwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ygRfFOykWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func d2H4gpUXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gnJ83hBXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1PotuahnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QthkOBpNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 21
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nJ5B5A2EWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dUiSYCiKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ieOOWDaTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2lceNjzeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 144
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1888H0F4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func A9PHg93mWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zoMHwcfgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KZDIhB9nWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func c7VZ5HcjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func h3Ag45yGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5W8rsRn2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6hlFmLoFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kl7mImKfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Kp3814xvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func v7Fmr2Z4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k03nJaGIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jjhQ95SDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func P5F0eMLBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5wv99u01Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 288
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LcY4fTr4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ELOTVzuOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i27G7M8uWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8eMr4EeBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 88
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ty0UUAk0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jMPz0IxFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Tm3mxYELWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 131
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RqTwSTA2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 288
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uhZ06HyOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gbDM5sFAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func p9y2IOxWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hzhJGpbXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aqpTzGDuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6eVNxGlOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1tlN6H8eWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gVHV18tkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Jb8YeuErWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kQ0BXgeXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UJA3VLSGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func y7srxsLWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FbpL0oFeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1O1HdQrmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VrhEccfuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wnaQbPajWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ERYCMa4IWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xzGQMB2sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 69
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jafH0HhkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ea9rRJyYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LWEvBaswWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RJTMfLZfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NooyA9r7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nonpW2TXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wmNR6QjVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JVgWxuiLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 51
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pjmEFaTjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 66eNoN6oWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 12
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Fjz0wa9qWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0Kmcrxj3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uPOICwbqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LgVYg51tWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uqwxb094Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func idn9kuL9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IaaHxmuEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EESIXudCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 181
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yl9CNXTsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func A5LzFdfJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func r45AbTltWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1miUv4bxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0HVgLs5cWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BuR4BNiPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lK07kLuwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func E29cuS8sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jPHgq3niWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VcORBrh3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Xcp7fshHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hjSnXkH5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2tpl861gWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aJNWGNsAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ARW6Yl6hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 198
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FGxIoUSeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HaXlnblJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Q1z7FnBBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0voGnRngWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func F5WBBWa0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4c7EgFsjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fHHWFePgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3bFj9WJ9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IS6ZHpy0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vHjCf1QRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MbTcmGTdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SBeUuG6rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xJOTrv05Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uYBYfbZJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JUBTrF8tWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func C61iFsyUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 131
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OwxIE8oEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func esHP1wJCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nWbTNbjqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HQTUR8O1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9W2OAHo4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ESIj5wx1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 104
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MsVKxHRcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sI9Gff0tWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0mrhfS1yWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dX3mTGGXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func llS0FQbLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gnUHAMl9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dkgkHQLWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HOfi4SqiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pLPpdCNFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FCG3YycjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7O9y0ow2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TUvPL0sCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tYJdPj0rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 213
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 26MftKnPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XpA5s0UaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MR1KiUKPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func z9bFnLArWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func L8snux2YWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XGuuZJcsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9gug8NqEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 38fwN92HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xzvfXE6oWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Bx9HHxa5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9lgKhWupWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EtYibRs4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QLHKMYULWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OuWKq5U2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oAifw1zdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 131
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xA0rZ9XrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cBdq6WSjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ca2Yk14NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 88
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DUnPWpuvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vgRwDjW8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DeRRC8AfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 64
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tTqo3SC4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Oen8NFGvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iVl2ExLiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rHtKy06AWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 207
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func e2JXzUHkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kCrPBWi3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func n90mmcgZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GqRAW7XbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DKHG9hR7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NsmqINdYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lXJcs7BMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qPfPj9xbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WaeHzDBsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Id0asIHiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vtExDEuXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tYFzZzfcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func b2M7HRVeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func maX2qm2VWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AGuKJW9iWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4cHynyNmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VAlXWt9BWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oTMPBd1SWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4bXwOGfEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Zd0oppkBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9LjXUZnFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k5n7h2NfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QIWC4xpZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func b0p0xpjcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W1UFdIHLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iBlCNSMAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func e6TVG4sEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func d5Av3dlFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7nGWdTgbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 67
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pQkQoR8ZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KK0UOODiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 38fLGYWPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AJZhSlWbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OuSR3NXAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lSEQ3wrwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HoaKPfoqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NbKlb3W4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KemtrcTxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func N7LHt8GcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 69
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RCRrP4CnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8OaMXgRNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func afXev5wTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZCwGdo4FWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QEi7RJuKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6plyJSDVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GwKrvWBtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 96
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K2IfkW0jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IvcH0JScWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0SqNv8EMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tG2NxY8IWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 288
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func b1i1DxMlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EY6IQVS4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aFOSMRdUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ol9f0bmbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func a7pjBi0sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eHfjKAXJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WSXMtK85Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dV3iBekUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func joygctluWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 798AWojdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sQveQJIsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QcIvm6d5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Tfx3eDcLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wB06beQsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pSj64mKQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HQRd7im3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func u15t0GiTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wrG7a4GoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6KV616qYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qL0akyuQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zpLfIXh6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ipYCpsBoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Wso4HQC3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lWzJpN7SWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ydbmOlbbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func v9JlLfEdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xwC765U9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ySgkJnOLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1KmhZe6sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2kbQqmTAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 207
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KHDqXCwFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sWVmvq0dWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Qu0LfmMKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OKZUXi4MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eKr4GzAYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3Jzz95KbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hBY9BXILWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 120
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4Fwkq1Q4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k5nTneLRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zj3h42jKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PDD6SfQCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ULfs0EFVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5hRYTrdmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 12
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PstJEliBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 12
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B2JTqlibWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mHAXA3yWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lbpk4ciWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Uk7vm3FzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IzWQm6d5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uWBNIYEmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func koJ1L8LuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NIEgXSmpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k9MwYf0FWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6PVBbfnwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cF7QUWHfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WvoOkMWSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wmmb7He4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func URzIHJY4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JDTabd64Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7BNl2PHUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Sj5sYJx0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4hzlbLDYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ILHuabKJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func it89Gzv1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RGXOeMhRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mthYkhFgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 213
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YosLzrEFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func w2sIaaPhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eemTwPQzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bJPpfKJBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CDwE4SyeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BBxaY5oTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jnlg9KPnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bboJfLkkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nYECGjpfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func r2OKiG10Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uAY4A7RBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mUWVuIHpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 238
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B1o189T5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 116
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FPkhxAzeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 87
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RU4zv4INWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aG7MFHSEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EKFJeaRpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tlWv9zD4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 96
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gjK2HjDfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vUWRWTcfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func U87bGda7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cckfmp9pWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func P70RxComWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AvNmciipWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MwRTON4eWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RGeGTkoPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1YReWDpSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ee9WGurlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uamMeYYTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KLFfOfYkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ze6sCRODWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func M3dLldjTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bVOUfSjSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cKoSvk3cWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kfi7rPLfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 284
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HkcHFmpnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 65
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Xcnt4fRQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Pwp0b6vNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eg9erob4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SJ0UBQF7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func idpdjMmFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vYHNMyORWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func euoa8LKkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func I145QQIhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WiVNcCtQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 213
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func n4SckLprWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cWii1cbgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l6ith0Q6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func H6rhmYmlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hwRZ5lvAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 120
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HurCE11nWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zAv5KFVMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8VX5GTVaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 181
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TZFYCcNLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MPnbmuWyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SbVl0CUNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NtMqpqxWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CqbE3JxOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aIv65disWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func R8dtgJzqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func F2Y1xL18Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lJah3CZbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fsjoYKsQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nxVew7txWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X70U328DWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EUA2bG4PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func swoEl9WiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8fEHUddmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nK3eIo2PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JKmERIAJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mIJH7aiAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3DSDCRkUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7IgrrgfDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LosTPjiEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JdwNGXhSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func orJ9mJOMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yGQ2hLtmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 181
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func q1GZlcmIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Z8bKhhmFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f17wV4VeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 48ztGDQYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yxoZ5mUCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YT48l6wDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SSTvPdo4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SmKn4TT3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zzkHFT4PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4kEZfS1VWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Lw4zDruPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wJMNFZw9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 198
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nF4HChqHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 104
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ufq7unWsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iR5tt1NMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SaWAn9ExWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qyMAYbFPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dzXAohOWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mjQJaM9OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ksiM2yVtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Oe2TOtOKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2eB5WeSfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JPNVQcfTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jVFdBgNXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func D8l6FYRWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MPYTtTYUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8C69oqAFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zIQra8AOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x4D06DN5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 111
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8Fsz7UJ5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BfAYedT2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rOQpqusSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 181
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func D3oN4e5VWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qtglbUcyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xNU2rHXsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 21MgvUNeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bmI9CqzfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eg7P2gRiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VGh8fjhGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 72V5poTNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kcQJO2oJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func D2wnsKTsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hxpxB3KlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ybweurnPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 50BRFteXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func e1BilvIaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8gyFbIanWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FDhelsZTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OxPxq3uxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Kqng7BetWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aZC3RdQKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SSZnq00iWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VmM6LIsUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uqrAIVoIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SYmjecSFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l1BVUkZiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rzyvk77oWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BTjqcbo8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 88
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eAFOgOsGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LFRi33FKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Zl0H1DOTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l5kspOjkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YPCjhSzJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func c95JUUk7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func apULnYWfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7E3f6iLqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 21
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func O4BvZoghWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dSUFqGjSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cE213haMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1nwy1zGDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 247
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 21q6BNq3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 104
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func n2iZzY6aWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 78
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZXSQPoMuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EcRrrygEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Wy9bjZTTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Z3bK2T05Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ov8wtmYeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tCHWatxcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W8hAf4QdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WXBVIsgQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6ekMUWgZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 21hrbtFTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kPf6OZkuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ol4oQAJIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XRkTAeJHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OkWvUoyJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func y1BzV5JZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lWUUWEnFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7DxwulbJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ORP5BlBQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wuT2301dWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BWVq705WWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qetjjIAMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 204
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HEPmwXI3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f1nTki4uWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eTn5gthBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 104
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bEy62diyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 238
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 73rq8HcLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fN6eeJoZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yFF4bvrwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ROGLfsa3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iaQd2gcfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func J4Zs29klWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8AB8v7IyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Qn3w1gSCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ev08thRbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 144
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func taOdkCHlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DxaFdGQAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OaFHTSflWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RuPZckaDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CBWR57L8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1i5CA9AqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 05ooyLnkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1CmRYmEXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dBZllLMWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t8S0jN8HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yvWdNvw4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 21
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EhssjxqkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KHB86u8wWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 42RKFILGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6PUZLqJSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CroFsYpuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 30
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CPz2bY6bWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l4ACFzyaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zu2UkEe8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X1KwHqIHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func F4AmgOvZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Yxt1IWIZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m2weQpssWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 247
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hPj8sDPHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XjZTIDUyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8rBhkUphWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zzeSxzSYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Hl1cUNNaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 116
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SkoTXWfkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BbFwJxVMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i6EI8UfQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6VEYkGwAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WUKfZ6SLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Wq7GilQ6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rQYLk9ITWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fT6mSrnKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iQ2JhXmVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ShTbp2xJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gPLMKytGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nNmwQTjRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gr3kmdnZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 12
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4a0hvy23Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zgntj4RBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 28
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3aybsNKrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gFaTYoqvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 141
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hr7RTZZuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wf4Y7TgHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1Yg4BMXqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9ciIvNZGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bDJTvgjSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X3XikJuaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NJzrJ66xWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Mi2fHgOdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WidFc0ywWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MbzkukpDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iir8MO4DWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G8dIWBxoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yy6vAaBnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ua5BU3taWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6HdvZt1CWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 131
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tIj8OMZ3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 111
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hpZj8X8aWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9ILBDtQhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zuhx4WN0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 12
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VRpSf60OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5vSaILm0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 02tP0qzoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RTIjPQXZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SRWCrR0GWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Rd7sxd4kWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nFsWvVkyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IpxIQVgVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jBux6p27Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SCawyCrCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 30
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j2s13JlCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 92rBYDXIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BadeFQviWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func a5IG12XhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 96
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OE03DFcrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XqWaSoXDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WgkFJYNPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cKYnSM4mWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jzkKWNjRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jPSyZQg6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 207
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PJqSUSbTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5m92cucqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8gUDIjaAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 75
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0ztJQL3mWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Zue6A01HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OI5NBDovWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func F63FxdSOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 104
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hhob3wdjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 140
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func deat0KSIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TRpBRHuoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 207
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wLfdcPLGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RAW1pxMkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func laR72cU3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func M5uuCv3QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func es7eKhAZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cdorKyvGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1XSKwCAaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mScropVLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lZL0i7OqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qvK9D4VoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oSFIqlnbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xR7wZ2tsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PXX8ndRHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9JywOJNFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 28
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xmw5jFS2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TFsW72YvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HtYkowWuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func crsrUCwNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yNvOfmy7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5slkki53Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6lzx1cljWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mFRDZwKzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JP1a15ldWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 51
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xUh13AmZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 30
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tCNerB1BWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 288
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xwX4u1s1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fWZa0XLhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fUXwwdj9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func n0bR38qRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PkOeiV9uWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9GnQT8KRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2Hr64uvbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DfBD6j0eWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XC4vDJq8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AxyCShZuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func U7csTX14Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tgH2o5KiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uP0pNgXGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QVlpNB9iWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uex0TQZIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func roV2qttzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yOgSsktAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k8sxaM2gWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Zv5zkaY1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func npIlIy38Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 224
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YNIeZUGQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iHQov2MBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 262
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f19lVHyZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ajLO5ElFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Bcly6GViWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2VLbG44oWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 21
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func snMSQhbFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 87
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0DaahaOIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 204
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dPaRkq6qWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VWiIVpyWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TApTsvPKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HotMWL5YWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7beTJMD2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func c4cCOndCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4Qs2wpyrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 222
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lETDYAaoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jkyDb2lpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eQpxuwkPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oXr8qUQmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OTmkVEOpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XEZFqjB0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oBHMiCwxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func luIwZQw0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 213
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hvDGuxhzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ypzVmaj2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6dBUWLJ4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4D972jgvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 231
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fbf0k6niWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func siA3ElqdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 247
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Aas07Hp2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4v8xjiLCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0CMd8xoGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Bge0baemWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QOzCixy1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZICNnz3qWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OA84HR83Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Q1XmtKxjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vJhqqLcmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hivCnlbEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AObELPrAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iamczVQeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bqIpQfURWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 55
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2OtAgEAaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mI4H67PgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Jo0gc5CvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nTFb6RhhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 87
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SvRMXQeDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OYuCiMFsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qO4CwfrEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CHsFUPv4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bJklui3IWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uaZsbvM9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 51visjGtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 192
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iZd40QYKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func n33ZmJhWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rEHEOjR5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ayEi90OSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5phI51LwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ddU7VWKDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FMMYwsvmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eA3V2D97Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 69
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t21iSr4rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4Z8T29WQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uh7qYvTWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Xi5oRmO6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uHKpjSdWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nccYLYlVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 238
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nt64cW3GWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 231
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kuCGdJuKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ccffXGQnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j3GgzaglWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ktn30unWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8uhETo9dWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KiqC8NESWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lWZPDN2SWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 207
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uNcvIQi5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 111
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nu9OwVg3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xXki0eGqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JBf3GEVfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gDpTWY0EWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1qYCIdBnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9m9sgiaUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NI63OLuwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UreFU27pWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func E4OsNHABWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bVapUw51Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func llBJaHXlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BZMJPnXaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wSARsf0MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jsEcBZeEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func s2M5L0sEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3CYoWgU2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6didI81DWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B542HzfuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DoTy8lKCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vaBmhoMPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0DSbXD2uWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8H9o1u8XWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tACjpud2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HLKWQkEXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Nw1jzNsvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func haibLzX2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FCvcWuCjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FHrhaXQzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YT4BM0LLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3RItMa12Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func N300Nz7AWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 140
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dzk9b623Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FQVH1SJuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mOYrY7pVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hwbvh2k4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mxGFD2LwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 64
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iN6EIAF8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lNaokXceWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func P5lYYwWTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func y7Vl01hPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xpvaZChaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xQ587WzxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func skHRwOBVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func M8ejUsb3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 288
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HHiklqHmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3mD2tCQGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mjVhbe78Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ky5xLmeLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 127
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iH46BFeqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 207
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FU6OOXSEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Zq2HuFBTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 207
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UU809AaVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 127
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SFpaNjFpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WbnAV5dLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gHG6u2c3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 47q7XEGXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DXAxetfHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YbDyqVUCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NbXr5PEAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 25VEDxULWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mblJ9SmZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func evQdbbjwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wj3awuLdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func spQs7Jy8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dcl7EXdfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0lhUq1xgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 240
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vOMVI4O3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func a2lKxPnQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ef8CiatyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YvvTrhQJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 238
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GTK49Zr7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gzPxRfFpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HiybhyWdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func n9ZqDOndWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hinBKn6MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EodVpkgHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 65
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LRxyOoQTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HnrNCtTsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 213
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DSeGC5qiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OmnV5KDHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lgOQ9spPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IUqwoYXJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K5J15kxZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2Jpa9nxgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0ZSill0xWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FUopsMleWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GPnj9iTnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func a4ZHQRYoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MpSR9EbgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0bzcZ0abWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func E08XENHIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zfrdvx3QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lMv2TGARWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Vv1SQ9tgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OcHYFU2JWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 144
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fxWjops4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2ID1sv6rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EvbU2wPFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Urv6IveEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func A5t7zmtLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fBqVqQWcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 262
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7eBU3M0SWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iogzKjDRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bR8VbiRiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func liqdi57fWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7YtnsbuXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UoJYbVocWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func E9giU07vWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zqHMT8b2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZFGXA7HZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dDQhasSkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func c3zDwoe7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wo990wC6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fYTfpv3AWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Beq2bWdqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iT1G97vqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func da04OOdZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tdp9By1DWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BQRBNitAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 222
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GC2lDc2zWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 098gHKRfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WyeIdhplWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JPWjzmuZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func u1AwubHkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oxg6xDq1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sVCod4MYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BPS5ci9HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xNdcVsjQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3R0BEQQ8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 04DM8hIgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 78
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IEEi1wRvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func N5fCyP8OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 240
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3nE7qI0UWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 88
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t4we6tDuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JjpfRT6jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2bcOrgVfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x7DylrqJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TU8hJMjUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func haTLw9GnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3n69fgQcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HOFh3pEyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CHX9YUeUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HjPVs5RPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4qy6UIchWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pnYRDZ1FWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dAIUvvWyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X1vNpPTfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 75
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TH9EMgC8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K7uqxGqHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nCMTE0PsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eUeluDdaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func e8olEpoYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Z423c7Q8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kLvaY7z8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 207
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func orSQ1zMNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BiRHDSTZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XnyXbtNIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func orcLxX6NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Pnt0mvcYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 284
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TsOVW4WVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TXiV5JYPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2X2lm4qsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 288
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func coCKIsnXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lGq7WFk6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gr1usbL1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IjpexOsiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PoUBWuPMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func h4eptlJZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 58R5iqH6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZCJWsuILWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SrRrt5JaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KpyExFg9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 224
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jDI4ras9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IDup2eQzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Q6XasYi5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bWmWTkjtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dkxuTc1PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PE80kQylWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pOTt6y8ZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1y4k5rP3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qkWuuUYmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 30
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SG0NwuoPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TPkihq7RWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7nScz3CCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dBGVyjLQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cnQkvSmZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Vzl3MZXSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1JyU6ELUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PdB9CjOaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vIuTQjhNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func obFm18HnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0oW47f6FWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2Q7JLUJEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ubptseYbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W4ybGtQgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pIVceNdaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func v0ZMElBSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KlymxCkHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0mfmos2oWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xeSA9FVlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func y4vfRVL6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 64
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9HebOp1sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MDFFK5aPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zoccaUDRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func arqbGru6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6U0GqmEiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func r56Vz6g3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vgE2z7NQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3obYVqdWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func w4x6wHt5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W5aeBG7qWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KRW3ePshWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CU9kDzszWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func p8L78bXsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cpkJfKyqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uHNf0vVgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bq058NnSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MBbEqUpuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 198
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6fGKxA15Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func T9iZef9CWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XVcL2B3RWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tyqqFvAWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func b9aprb8mWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aAcFKI44Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func a9XZ02ENWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IT6HvFQ6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DvUyDFtDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MnuA47BJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OZqcH50JWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ONYSlFW5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 78
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func S6zT2PP5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 131
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JbyyAYAuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func v5jAjM8MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7cUIHf09Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QKHrfj72Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cBJOdeKeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uzt74miPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 247
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2BlOviutWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 51
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ok4krHsNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4GDXa4kRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CxJux8GeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func J3BZ1RNJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uIZcs2zcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 120
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func O8mUIaXyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func L01cpOHSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2vJRYSbHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iEv0ovPKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 111
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func biO1ACCoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XDTrIu9cWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 12
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WoeatrinWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Wr9zeCHBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pXjvTI16Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dPNGZC0IWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 231
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DyDqqOddWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func c0b0hNHuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func g6Ra4DLdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AkkyRRqOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 71qOjBreWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nIWostPBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lgNUhmHoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BnJqdVDlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kto1VMpiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DCVBjDoVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kCxvqoIoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6zcxEJBbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4NHzNhiJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Twd2mCd8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bMZ8e5NtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func weRKDtrGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yFm5SMBgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 109
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0TfiHISWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TbMCJBLwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kCINGr5FWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xVwY9fnoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eoRFxp2TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Xq8AIMTGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iWyx12eCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 131
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GUxmOFCTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DBSB5dReWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3dj9PFFmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 224
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HSv1NLpGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Gs4Dai6IWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gB02qvcFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3bKZ2ZiVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 140
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AGNabLQSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TnPE1eVmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tiOXYLnYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yBjI1elGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WaenqMgtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 231
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jCagMFl6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5hLJV0DiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 141
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4GiYuI0HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 15vWnKD0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gs4tmuveWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func P2FCkF56Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NChRbVPbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Vf5bLgY6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SUxvUUmgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EkKQgydBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AHhBqtw1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func syy7WaIAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wErY2GYfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j7vptlX3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B1ohPSDkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hwDYozIkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fvwzLtOaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uSpNahnOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 75
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QH1WyoKRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f6Pw4xC4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 144
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AH4dC7FRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Y4QG4435Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 75
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VR4vu8NcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func H2HURSPLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eRcNwmijWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yApSc0KnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UDzQ5qSfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Cg5Ka4JYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hmbyXQXbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func znZmgJQlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func liwcCESkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ivk1OUS2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2t28JeRnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cEDdxrQRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XzFlvjQSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qg8W9TWSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 198
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 07FqvaObWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 96
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vnA2qmiMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FKMUOjKRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wRrtLqFFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func URpooIubWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9W1HE0tfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PBZmEVvQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1IQmbgXPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8IBpNTh3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vySVra3WWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JU70BtN5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 120
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cQG72XtoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 28
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MeG4mry2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5V8iwZugWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qbMnoKLpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func v8NkTlfYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EVIYQeJtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func orizlmAiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hFa9jS5iWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ux1ln33MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SotCGP9sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gLrKt9twWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dd3o19BaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 262
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yO6Owvp4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OQc2aCERWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3VIPV0JnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func b1SPZTa1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x3BykszUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 28
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bUdeuUmsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 120
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EVER8sovWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yDn298dwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fgYE7e1hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sImO2t0SWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2qmU4OkLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JwCoCVvwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zNx5ThSqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0UUonX2zWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func L9TFEvVOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2A4RXy0pWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oXv5RtFfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IbOWRmopWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 55
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xRrqvDm2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yBSfjE5nWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func v0of8Xi4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 144
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rjz7xOJyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Qkng4s2qWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 87
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZhkF3JnFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sqAqJb2RWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4KPncdbUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 260
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func h8o2BvAgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func R1D83885Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EQK14uUvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1VvdLVwoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2Ud3EljKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DZm6hrJ2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WpBFGDE1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mplGewQCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HxwyKJ40Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xyqrip2BWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QLBxdQWuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func I0UOKyvkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3uOsd9zrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func I0PwjiXgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TDOjkeHWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JGtkdFk6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l9qJtwM3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XUf3YZQ7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lG0xpxdRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func a9Mnn9yMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ej5XWVrRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PgAxcIogWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6T9aaLyyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 262
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ogSS4XSIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eorE9MJ5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gAcOOul2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Q0z3VJOmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OtCWSe8xWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Kanm6x9qWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4UhUfvAnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KETPv5tEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zVNuOpBLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 222
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XYICHyUPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zI7IC0L1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BQw50nBFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X3enYtsyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eNvfnas0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZFZKRvGfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PaRQx71cWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1sMljGQJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1dtGw3MVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ktreyv7aWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vbLGucFjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JFzK7zcQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YyWtdbnMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4XQ1dLemWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 64
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rafMmAt5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZhyvPdPFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Y5tsBn7KWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 28
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4MSIyd4OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lKeBowxtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9WiOPs1uWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MrjH9z0CWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 480sfK40Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ETFGCrwTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 104
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1QW6GRHvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WqJPE71GWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xnPr6UlfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iZsQHKm4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ul6hUDMNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2GuMbfSoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Wj0HJZNeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RZhdetXTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func czYqq25SWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jmGVbcdJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 109
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oO0blW4dWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MWzbSywUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 37Um7ThLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ARAddHJiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func APIwnzQsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0hXRsOreWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YCdLGb6jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LlakHRrQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yPOpIBuIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 61vJ1INnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HWFTBwCTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FJvppe0RWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZCrL0fyrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2d1hzBSuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nZBaIDqvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Aa1Jh662Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IoVJrLuzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GdFVxUKgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func R8sR6jpvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CuU1G2xDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RCoDmjiYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Esp6gJVKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IqO08ZavWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZbcxAkO0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sBoaI1d3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 127
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xOqVqltaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dppFbp8xWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BtollTslWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pmkJYA5sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bNusxvBWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rXl5w7oyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KlJd3tNHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 51
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HYSarORUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Q1Qh3T8NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cgxEBPyLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 262
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OQ1IHyfZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dUh88T4gWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GadsN1JkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wfClTip5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rej27r2vWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AVw82eBXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7htIhdJQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rMif9crCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func INueeL0ZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rMglLI61Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WAHVBBddWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SwBlQA6AWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K2S4h1QHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0rsHXMmaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 240
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1TrwcA5jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uIYNBKivWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VAQ9UgJ9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VrZj7yDtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qwmtpjZgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 231
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yRztKbdLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qz7RSqdVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YbCO6Lh1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pm3VlGTkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eAF6LpJBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ASfdxhQ3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aTemHalCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ddwH1aldWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func odcDp0TmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GpPt55kDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Oe5YreOpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Zu3UyrYoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 131
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l4NJkoc6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UULAgQphWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gfTG1qpGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func z7WhRwo8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hcWycfVaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 73UTrLjzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func I0tkrh32Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 55
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gk8KzJetWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MeThySvkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kBiX1XUAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ARzgHBt4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 284
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func C1bs7raAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KjgFz3c2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5ZYLk35GWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AfUCvUCTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uDoqDrnNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func u7OIZel3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func T5WJngqUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5dk6XdlTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bvSsIaiWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MWXAJ0FeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k1BONBMIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3Cm2ebVpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1lR9Z2G9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fR4fWFT7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x0ihBzErWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 284
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tko7x0lwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XvNS7nTQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func v3TpiM21Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ICILaBImWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Tv4SaB45Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IYwoTk0WWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0M6d6LAiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 48iwsqrnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func R3ZCtj2vWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func idcRY8aFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func reINF5MEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1p3LrdiVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lPUWoRPCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7UuV5v9PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func C7ZNnelYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6L2U6McYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 284
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XkXlTSf1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IYw5iXRIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5OAd0YAGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XAZ4vKnQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eK9IUEwSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5y98BzeVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yR1uhw19Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BALEPoizWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lbtbu1v2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8SqBCC62Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SrH3LTL4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SbVQ2CNaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1k1tUejiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OztEN0ysWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qrEJCgecWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 67
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GSZVs9qOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MWFI5WQmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 240
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func y8HlLj4gWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rxl9FTV8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iPO6qPRKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mKJP8XHmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m25pyiztWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yt2L8U1XWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mFVonUBiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fs8f0fdJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fs0KNVS3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EwJdACt5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1eFUSPw0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xbgkM8krWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qZRKRBgpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func a3WDFWBVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9221ZrEQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ztg7X3iPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZClTlxXxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OklPxrobWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ix4hrcpGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DdR0lTNBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kIbZ6vAYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Lu5fw6vdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2Rmgj4wJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wqpFgD7UWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BXVsv3dJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func e3WEC9f5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 88
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ddV73TCxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gSBXMiJyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 127
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uVDIp1IvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Rhl5w3gLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rWTkS8qoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZmO02AYwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mvt7QUikWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HqhyYACPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Wa9j2oK2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x18fcrjHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 141
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vhoD7LnbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 85RncVCnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4O7zUAGFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func euF2PJhVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LivG57DHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HsLPulMoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 64
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lqxMIX3kWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8vyNYDQ5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ktwFTJOuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MeYQvdp7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HNkNMmLRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zQqY3ClfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4ZAgJkr7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XMqe61keWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func z8bjNqzcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2ht510kzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func d9X4UZBLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sXJq2id6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QiB4KcKSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BQrBvZ0iWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IklOQ5EVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func e33ZnETcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QDAdAONqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pY1rKhiVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7ZiTwbytWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kYge24JdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TtCcQ6iFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6RLj0HBAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 65
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5v6ac27QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yxbzZwJGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wGzYotQSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lb6oLay2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ETA8p0OdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IM1FPg91Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5zadgxQzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EQKfVwO0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m30zfVJ6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7UOhZckBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yvQcz7N6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func acFsMH2QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 127
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Z3nTtnx0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JgXhe5szWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QLDyjrbHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TNe3mYVrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Mcl8sGQfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6D3JzVK5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2gCkhtJdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GxmGahM2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1yeUeD97Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oRolLSnKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UEI8RKjQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pAFgXpWWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DM3uKQCZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ySjXiuoKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OlonJ1QlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XRDezG5fWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Q1RKwnNuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VN0eJoIGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kbt0xsM4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func R5qqwSZ5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func q9RDQxEyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j3NwQAoCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KeHvXu8HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vMcTgYNJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EI8gWCEQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qYEmRTAqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PIyw9rIoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 116
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yjFxAZUNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5tCrU9EzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rFaSIXWWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8yoThMV5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OXq9QAbRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GsQ4vkSaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func F97CZQaAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func chJ2OC0XWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lTDbV3PzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ktIoku0oWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gYvvE7uYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uOdMbh9wWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LrEu55fKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LxIsqGx7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lBmIRQaTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WLGbm8hPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hYHxCwoTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Kj4Su5uyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oj6mypu5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ExO4krg8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func blfmadVKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func O0TorwMdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aa03cGrKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dxw6LnxjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6QxqPRHAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7dbmaGRmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 12
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SBSEtbNZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cmhxM4TFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rjTnuRj7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZGjQXE86Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DFfjKkwdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LTBMepQkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ahJfAIvCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pvFHmXyIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func buHPTNaDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3yajjzUKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func F09DYg60Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W49mLbh5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 207
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RcCLF46qWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0vZhmp6cWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bsLamSxMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 238
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bs6c0exlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8fHVZ6mMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LuF9KM1HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xm2OZWWtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 285ceRiwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 141
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 07Z4nl0ZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Otgojo4JWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qpPKODq5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DtO7Q1dHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fb3Yz0nOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fuH4paHvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func StdYjHk0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func J6U81Sy6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func g2Fk0kGyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func r2DZbrMvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Wt7rjszwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2OCBmpyEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZuWi21xDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1efq3IxPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YetBDqTEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 141
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BDmZJBipWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zKZ6RZFRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 65
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 72ZGZa7PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 39U3gApIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func v8ysHXwRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HuppVm2wWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fqtN1uZFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CFtjoZ9nWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ef6HneIvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7sJ2JuGFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LYMoFGzjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jt6F3geHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QrBDrd7fWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4hzuECelWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 21
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fO5E1e7dWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8UcDssfaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hnJ9Ya5VWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zFdcfAcyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gcUgdY9HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DmJcoMV3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GMZcBnVWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZwdJs6PiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FOLT2TWYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ErDTtJvOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 47GhPy1XWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func daSydFnkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func J5wB99zbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RxyKB3WSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SqzHujIdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BB4i6Uw6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JTFF3ayfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IMgX9yyPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1AKEzT1NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mcW98rC7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zSYjV8tZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bDoSW3quWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 288
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0XHjauvuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZVP6XcurWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iDFVLMdNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rqHbUlLjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pdnaNo9lWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 222
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CxMOvbasWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 28
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rDmnY3jtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GOMVRL1MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PEfecpLNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 140
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BU3n0S1oWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VYkGv4ZtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vjtvdk9KWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 238
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2wWXqldeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 25nWkq6yWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hWydE8JBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8gn6rnlWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Bk24neKTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jDlo1kRXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CWU6BWhiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UpdYXTFEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZxCz6LVVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Q1IiK93ZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YN8bAH1JWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ro6CbjQeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func erEcw5bsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 120
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func h5ozV8xpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nvZLScaOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eFGKgOXnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Qn5KEBWzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Rmk3veh3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pQKulk1aWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Yrmmqa2HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 24sz5yCvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7ZkbBF8jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JmelLhcqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oKNhBz42Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wPoOH9lPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yCuieRU8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jDc9SecFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8fUVPQQtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hOV2qQ46Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func E3Wtwm0cWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RIkikpdgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tQ7L8xHUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8UvXF0jGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xBfrgnZIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func znPMeRDzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func L4ykDuUAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3mm8AWPlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MPCCH6WMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NbnxZDjjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rZw8eXcuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HMNKpUXxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FHLP7BNOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yNIptaXFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YnYGRahzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9pOYtAQZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5xhYXkLIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func y4qJVFB4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l3c0Br2IWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func P8foKfwxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9ok05EhnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Acg1oRf9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zMbuUlQzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 12
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1y4ewETKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 204
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Sgcxb74kWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TXwNAoQhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 53vnFm6xWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CUEHE0TuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GTJjpX57Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 109
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NEJnQaTtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WFqgtasyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LObpviZFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 65
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uDIyiphUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rHoySJCLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8Yr0QfOzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SOyTrFFTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hE3VoAskWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Oadtz5W6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 192
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HCDJoZrAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iyhkw5eKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EsVvdnAuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5qOMEguXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ebt1WFe8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func T9wz62KJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QOWXCLpHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OifazunqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gHypgV9BWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hYoTf7hDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oW6YL3ayWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cjYqmLx6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7AF0vaeXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uphyIwTaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zcRMVQAQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VMf0yJgeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rLrHn2eUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bGkr4VeEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NrX0CquyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 104
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QD3kJCfEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9jGlv5GPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Jy35z5EQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func a2HtHPQxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func llTwVZksWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func riQWkJdHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7F7QCBFIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WQRlMksuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SWXgPHDTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OfevSRPVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hyg0YK36Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func afFwIEv2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NSpFOwjoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bt4zQBZwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func e0oQuaASWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WcNKMJipWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func M6N6KvrLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DdJ8uhuPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MraZ9D5EWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Fr4taSKRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mj0Ho0efWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4YUoxhWeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NuaABa92Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rB2iAGx6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7pt3Z19rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pgLDpr1EWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bYUrzzEJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ozFqC3i3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JAb710xKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hHMwlkcyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hif3Bwg1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func exONhmYCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Am2aUmmGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PEIf6jpOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kdKjIJrqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qRYI8BPiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oG0d2QSXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wSP1zZzPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mpATmcrWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yJYXJd3YWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RJuP4iYVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZwlyNxHUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m3dATFVRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 87
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7xqkGe41Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jUA2G9IrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HnTA1Mq0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 222
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i78VC3YzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kjHwGbD4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 120
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Znw9Ax7eWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func E4bZcgiBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MdTAa4PEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 28
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2uZTw75VWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DRxvivTbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rvEarPzJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mnApGenOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Tsvgq7tZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 231
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YJmrHRjAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func n0h14OB0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 127
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vjobqsgDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ivpfe4igWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6FJBtAFZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hmPsRn1oWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ICnGMDHrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hNe4AIDnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kWvO9m5vWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 284
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZQDvRkFaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func z91OqnC8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tV4ODKamWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AgsGepPoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fH2nfoNPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Dv52WUQzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CuBe4MQCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7s0I7LPqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RwCawoUaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CUZbcOtRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VWjIKwYtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pxOxSuMCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IM7ZmGyLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DB08m5AVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func buCZcO36Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 67
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yAivIDkwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Cf7CcgrZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8r4dwE9ZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UaXmlJRnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OBqOgDEbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 96
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0pneQQZqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rJ9dEd7cWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jXd3hdVbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VUdNTdhjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iFyoH9BEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func shiwrGNzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func u6drPfdLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PlnwU6G0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2mwi4MsuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sutI2ewCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Wijl1HIuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Eye2WqohWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xA45gNUrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TXDYDoRqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TgHr60VIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2h3a23jWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dg4XTRnmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gaMVrqycWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 51
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6lIAdTSKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YXIttlFKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SCYXmynaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TfqOkR7rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 50Q26P6AWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XUKBcXCOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KOf75HTPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4SKakEetWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WqVain5dWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func es9kNAL0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wdb2IGQOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 222
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1wAheyDCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HXxJY4V0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MxjawHVJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fNfgEvL0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sfwCQYp3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 78
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qZXZdZKaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G25yN7eWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7RKNO54zWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dIvq89XhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dR1CPRM1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7sC4YeA1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sFG0hs1XWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 64
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fEzfCjmdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7gRHV6ARWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PnPuXrCYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DPm24KyaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WdOJmTqwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Gpmi1kMqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func D17mLDItWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 116
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func S7DkxSnaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5CCdy91XWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iUkrpaPoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GnQdFLfQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8qN8XAM1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 86mTGGSlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 144
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cZxnHwZvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Zgrnl0jzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YTtHutMSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lbHf8NuiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l6K8bguHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2LdU5qIVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jG4ZJsQKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 87
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IxDuWmakWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pk01CCvGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 262
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QywKWOA0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IHXjFy5lWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wwbcMQTmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2y0h0wSYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sfaUIU9rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PLymeQs2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bmBYUNQeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EY8rKVLrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Gotr4yFYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4WyL4ihlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PdsQ5Qv8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5vk8aUjoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func C5ygPqw2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qMdsNO9JWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kKWsmw5WWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6DdFwCDMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mM6PgYQVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MT3wPqsSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nPySvkcpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 79O70QIXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 284
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eQWb2ig7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zpog8aP0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vjFo1vBKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func p9Pzgy3uWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tDAlY6hZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yXye4UXJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Wgtwc22YWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 192
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9BTvemHIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MWQyWNtTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NQODB3jIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 44j915DcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lJb8zIzeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 192
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WP772unkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NCPN0IC8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vtMqgA9aWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 181
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Z4Q7nXwbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 19wLMqJsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mkqSTYSwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GJbXBLPUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DcHda1YSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func te4oVydiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sGnxT4c3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 247
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9wvQA1zHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jWCwCxrnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lyyOeT9oWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 65
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l3wYywGPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 141
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MuXyJzHRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uqgUXMVDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func w7V1ksj6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UaFNgrHIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fCA6WFd2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func npJiLkLNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SXAUGiUkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xb6vU0WdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HF0k0DMJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hqcbtjGEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cwIftCZRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 75
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mh1anpyRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CPPPNfPaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VN5mI020Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XQIuZouSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ppkI7NygWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VvbsGt4VWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 01KVO19SWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ogThuVE6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PIeyndDlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i8SWU5L5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mJSyxwxOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 144
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ad8BHwLLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func s5s8K46nWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kdn6AnnZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 140
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0jAHYGVGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LNUIpas2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Nloq6Qw2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xCiI3V8AWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZtIm5ce8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CGJ31RX0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 224
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3ApjRg9hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wQ7tEMcOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l5kfg7n7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5HSBWQ8LWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GlTgULwLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Vd5tHYzNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func h6LGrYPtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lDgbSgnTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0hKOITYrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OhfyudHxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4IOYrE8kWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OJlDeaqwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JsiosWZ2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NnXKzoTrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HvkuDlASWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FUpTcLfKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9lwExd3RWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1EHPkcndWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tlpONvwKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VSl0sLWKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func E4UFwhxbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func edBknPJsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KhXhvSt1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dZcq2IruWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gh6ARKbLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pYrgfEMXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func laZ2X4SUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func T4h4LV0HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JIiqrGuRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VtgMXzj7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 104
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func y7H5f5NlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qrsHCQKaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fU1G3YqJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tptD11rRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func msrvaGXCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8weT7iaJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func owwvaulrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 21
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yPnPVL1XWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zcMiZpdfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zkxJp56eWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G9ETZtqKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rSRMmhlsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ldVuYYZIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7I9hDBxTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Y3fucjVOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WZqrYce9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RB6AmHxrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YoUMlm1uWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1TTgnLxIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5jGmupDpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tXT5KHDiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FIavr5K6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SoRFKOsUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1CUBNoNtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9GM7NzrQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HsdbloHDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l0CUS94jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dEKjRRPWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Pshn5zKyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jAF5osyMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aQLH0L26Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 28
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 81sX1lhbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Y65iLDXIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4UKuEjPqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UrkzpASHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MuSn7oGTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HRJvJz23Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0Y05VXVGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vPK2arR4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func w0EdzuyhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LavtYruAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func N0yUKEy1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lnzT0xuNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FtIjGmaAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vkr2GSoiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5TjGsVpHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OPYV73MjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EfgfKkQxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l3RECiLEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wiyzJBTDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nvMHeyX7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EH0tKdiAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VpUfuWTtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EEblxIJVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oiudexJ8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bMkE5Q1PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2U1sNz84Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cKurhLLQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m9rtZFhMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nqVkUj7MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QaI6rMTPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5MiclNHxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0jImaIOiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1uXCRSo8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1MWSb8fsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LOxZ1LAmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7ojmoEaiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zyfRpvt2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qp6Tja8RWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pnHM0xttWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 104
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YdjN9FAZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7Jrw86DHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KrlovHFKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rVfdVuBxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ar3bllkmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iCn4wzesWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3FmbFdEIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IG5bKwrMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rnUVVqlCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3IvcQP9tWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TOcnI3A1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0KMkxRJfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func w9oU3qH9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X2Iw555OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Sq4f0RZ1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func V3udyDiVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8tACLo06Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func s6GkKLR6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 67
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IMCDIHPRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ItYQyAn1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VcMq1b3kWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OKEgG5gZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0Pn30n6RWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yKQK9hnPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wcdG57NdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func snfsprX7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LESOs9eEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 198
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ro3wWGOoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5e9znVDQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func quPrEvr4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1GbRBzkAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FI1eYgxYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5dI8ggD1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7zgdmgMiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 64
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KkY6Jw3lWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EFbxghxOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LoZKkxMpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 87
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AMQ5EQ67Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func c4MIqOnKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qW5FPjWMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZHO13QeHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QoCRfjEoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func M5xEF36mWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vcSam4wIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ixs2E7eTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ja455tNKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func H597GIM6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func svFrAYqmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RfyMcJV9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dwgkJGC8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ung9UrQAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func etY3HT9MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sGmY4gMqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nvx76sSkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7tFw4HFOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lb0s9ouOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PT3JssvMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BQeObFRPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func g93VmZFSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WQ5TmNphWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9g28LTZwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5OipQ0PmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4QJMdaFnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MSaq1Lh6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wEd7muGVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 28
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Wfdqc0eMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DpDAe59AWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AZzUX5psWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4M8hPfU7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4xDk7IdBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 88
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hKm87O0qWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func N8OoPZrkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5d2HIpGNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LvbIhdQ6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1RwDGK72Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 238
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5vsaSNHBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Zr94FsoBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DhtGIxlFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uDsZPISdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func N9RS2i7tWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OfAcd8q7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QQOIYgCGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xMWFH397Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vw9RnFYGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GA5KpW6kWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JROv37P2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LfCJCDp6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vzvm2h1FWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Jq4bM5ZMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8Lz9Gn3zWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IQL6HFxLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AMGy8IziWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nmkBSi4TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mffAgQecWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nttZGbU0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yq9QRm7RWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kn3YHjXFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K2ED9ZJmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RVO3MysWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 181
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UfDlykTFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func veJghoNNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KmyMBqCZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xPt1YR5QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lErk5F4bWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 284
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SpKftfLzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UmeFqxsWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hzv3glMyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Cqt4RXqxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YqXURaeKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IZEUXDalWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UKZJgeNjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 116
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MU7Slp5uWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 213
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nLjW8SzRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LzJR0XM6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xFTb73ptWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PT12QzwqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 127
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0x8arTYvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WZbFGW5dWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sHSzwIMTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vs4oVpguWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Fy6IZDw2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1eqnT9RMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gaErtBKlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XG1G7NqfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 12
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j4V5V18WWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7J38RTKVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cJXHWBeIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func N6aELoWXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func M8kbo1kzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DKKNS1sxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func d3GfuXwsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PeP9ct3JWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4coB5B5YWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7YNKJmKQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pKDmFmc4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zHYPwN3eWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9hg8b3cqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sBUtlgruWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cNzGmBFHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lTFOzU6HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TzKWsbQRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k7pH7QMaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func otLmcyYdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hW05N5oYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AAOSPC4XWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GMqlw2TmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QKzxPocOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QQria2OuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func s5JRbjXjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cQW0ayZsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Tp7FXLAmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iJLimEzNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jVKFHMH8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 34jtxcHHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MCSaWYa2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kw8AQAcCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func I4khdGhCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K6AWGCvtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6eHq7IoeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HdqzS8ZOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wGPMQIrKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qkqdFD1iWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VLGba0h8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ktX1uakJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xVdDSzfBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 64
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WcyhTWEoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TP72Mf7wWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tRF2N65jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FjtCaz6DWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fmjIQhNpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NBdgOJUPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WNL23FzsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QQKOOgzQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WreLioOlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 55
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Qh0mxLexWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ogmdkv9hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SENztOYKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lIj4C8TiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3ds4z0sjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qRrg7pd4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EH6PyV1mWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kHSP1NbNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7HTMjXDsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3po0klXdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cM1cp1tzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func N0Rf33IyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YGpnWaOuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nkLtXrFbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func q6KA0BCPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jjPB6aktWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bRgwBH9PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kNPxa40KWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4z0cpV9NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2tzGX01HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bmCr4et3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func A2bvvE3QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func A5StMtb4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func USuaLvlKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6bEvtw6VWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CEX4uSJhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aHumKzZPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UCOtT6E7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eejXNClNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func q78bIMsyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 28
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WmjVxaWgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nLZlgr3xWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6lbYuvLKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wofRJeVgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func za8oNjwKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Kx04LN4SWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mRFc7r9mWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func O1VJC8GsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UH88aY76Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dMXvcVraWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NSyrsUetWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4WSvMoxwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dgCqGQDJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3hznAYthWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8nb5N6Z8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eRxJdqdMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 213
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iDNj0rdbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bNlJ1j3FWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mfGfhKkkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 69
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func e9hahLyEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9LNdJZJkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 231
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 46YEG3UlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Os0uBbZgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Mr9nekxZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vLs3cFRWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1BmAKXZ0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Kqbns31BWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qTlCKBAsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 198
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VBfTJuqXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func APGqERSeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HtPSMAU1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7BkCzWoaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NFIEDDEXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IlpaLkzBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mOHrZX31Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ruM3UZZYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2LN7SQCKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func efTdvBFSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 192
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ipQ82uZMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lqIfG3aWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jNFi9H95Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fmScwJ9EWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 247
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LaEKpr4fWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OLGWUB6fWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qy7imFK3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AIani4gVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Tuic8PEcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wrl2Q0tjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0g2q8jSGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func daG1YnD0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OOsGmiofWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SYLBKC7tWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 284
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rHNBQ004Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func azTgIqI7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4h2jiCI2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CqfuN92eWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 67
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Yqn4jlZ3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SlnQbDN0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t427WOqZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 238
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wT0Udxi8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uvYl2kcHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QQOIMExKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Y4fMZbxIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jSJ76mnZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eBhDf8aLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4Z4A35sDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fqCyowghWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ValkA3ezWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6qqppXFZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IDFpIdmrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func avPEutsCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func P7BIcPCZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 08OlC28jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t010RqnvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6hwpF5rWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func auIfb1sVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0ahlrlnFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZeC8atDLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qZYGdBfUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OeQeanyHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yKAiAwg7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9Kabiu8kWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CwfVU5uVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kweKfkbjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1oxruUpSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func h1vjRYx0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func R5MpNUwqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UqYCFOF0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4KUG8QTBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WA8aO6iCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PdwhgJGQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bgPQcXnFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hKMrFBWqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qq6KFsDcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XQ9nYNwNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AuheM4iBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uDE7a5hQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UJmPXQSjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func C8RnincqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ehj6G9xQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 30
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t2hkbWgpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9a4vYtJpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FOwJyJSeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ni6RRpeFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nr86xKw0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func U2U5UyULWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Uxc16IpDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 03Hjtbp8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BQtXeAlpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 75
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FgUByYB6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func h50UU5jjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 127
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 011SJzaHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RC1taVbWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0VMLW2M5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SUgNRhpAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BhYMjQ1WWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fjMgBXHUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xAjK7lWJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZKnpMeZXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rW3sUwZUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WI7Tg2EbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mLMbHxkrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BcQcujg1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func v5QFFtYQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FLNgmsWIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hr4OyMqNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5A41clyHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yJFnUJLaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0DgIyQ17Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lCFD8FmqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 181
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rX9QMepFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 00tPWN1hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mBS41DjDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EiibeUJLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LZ3E1T5GWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func di6MV7ixWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cqDHdlgwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tMpCu6NXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 231
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vFOYNhEMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func llbLoiCtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rj9nuZnTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ojDiLLy2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dSpgWx8aWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 104
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lTAtYPYrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XjXe8e8aWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vIO8TmiHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func E7Zz0vIxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func peck1ZNpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NPMXaYVbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CRLbqYhaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 109
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Aqk7lx9yWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qhWOi7eNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8WOdPOrvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func r3pgkTR3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WYHdLiN6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9kZxr5UkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aOjcoN0PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cfy5MZy2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func V0i3ks0xWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 213
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func H25BBID2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XBWtfzWlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BEzExYIFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eBUfJWKtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZRUHsoUfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 65
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uj5dK1v2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func db4GNxENWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IEA9WVJ1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Lm3RUUJlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7fFPhMJnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func y53EHm3oWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func U5tbQykKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OBZeYjbSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6BxSp9EbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mSQcPl6fWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mfNO3AgUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lrCvOxi8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 207
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BSxnhNgOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dOYfJDB4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vfgWLnagWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LMdVTXAhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bewoCUFyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cEAp6oM3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func T8AAqHvwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func O6FAbNw3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 284
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Y5jmw6NtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FN0WuoYiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5lVT3SCWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tcQfaR9DWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9PocipUbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6Ip8oFtUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7jcZFsZQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WZXeq3WrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zKc8vtrjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UgHd7FW6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UCcPkubQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lsD9nJ1kWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ko9QwmxSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dBnBa2GSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func J8gKSQ8uWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8i6RvITpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0KDK3ddqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xmaXVuHEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pIRXDHiYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func me1PzMoVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uTdZAW8HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6UWvVe7LWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8Z1EEkjRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 120
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func U9bG0BjyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 64
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func S6oYcHWSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jOTgLHWvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kMkLUNGeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wOxtnnxwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func E5P6y6M3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func h9JWeh1hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pL16woxsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 207
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XHCojf28Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4QoLYDPXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 120
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ALQxp5wsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 75BwwKDRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZcKM42XPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Lla9buYgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OBqAPgJKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 69
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SeBuk1LuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4DWiawv9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QNK6xX5UWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sxH5chzFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 144
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ondURrGjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MCM0AbH6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 247
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EHkujguNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zepPJIagWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f5zVAX5hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BJWAFEDuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K8TdqdAgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func L1He1gv0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 192
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m5QNv80TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MPIxQSDQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f0izr3NzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9Xcz4WwgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rqKGNQh8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func J4pmBySXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mOnJ4IgKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func r0NmAYdsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ANPNXy3XWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PlUS1LB7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IDOfffY3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ANjy54EhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YgG4cV0nWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dkIL77lqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tACQrWtMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xnuIVuvRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RybarxQvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eGWdJ500Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qZhFv2qyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 240
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yANKjzLwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fpUWZF95Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yvikta0HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j5odI736Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wWFG5Gs6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func b2VVK8wWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Hq2VrIDxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EeTOf8nUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KjD6iGNZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IPPGxMJVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 288
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4HhOfc12Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zOwmmA5jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func o0dnzyM1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func u1Seq0FvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 67
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RwZdzgDUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1K66g2wAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 260
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 50PZhiqfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func U2VuUdwiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lyNLxZfwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CzS5cFhFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ytU9AL53Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PC6hKXFoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZlVeLvE5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VrKUrQ78Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ccBufphtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8fs4w0azWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WwXVspebWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DjFT7IPSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i2vPkqviWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func L1tQ8EZHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m2Qirb5RWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3BWiDvUPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 01H3qduNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 16g4jyCzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func p0gWW6uXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 131
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HegwRSgpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aVMOMNHfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fSrniAACWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func frFVjn8lWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nUgrx1dMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7c2DXT8NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dch926I1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MWse9sX7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XoLutb5DWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XsMEQDicWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VKsUpZa6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func INaJOf8MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 260
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func biWymAY8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MZ2UofZtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func onB6x7cXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Tfa4sbnNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rVvAS4KrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aoYxaKKcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func D2SOyHNtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func R0fO5Sr8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Odn9BQyzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BVITzSlNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Jte4R6EMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iVrR4vUTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Wt4jzbFFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uzBj2OqEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CU1EwoAIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xTtDUA5dWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Rt1uxukqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Lmzvn74IWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 75
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BMZ0MIx0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bV2NIn7gWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wjmBVXzVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8BLFqMMlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 140
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9C4ZPNACWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RZi6keguWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cNnL9XvOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Dl6Vsn1TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4CkEiZSCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EAanXVISWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x55djtYoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zsBUwCfsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func T1dsCyUDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 12
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yBpdaSKeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m7mSAmyiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 213
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Gtt6mXU4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hi7ECOoAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bcX16xkGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func p14HYzciWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dOU1zhvNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XsbY8JQ8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4m1RXuC2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 207
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func A1F1SdogWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BmHRuPthWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i0gnzSX4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3LOKb8K2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 179Sg0VgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wZT6qRsGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dY7pUxnzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iHYJ5QaJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1ZyDRxcqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 69z7MS3yWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gkoZMwjFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Krwb1huOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TF0FdConWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oiP3UlpxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m1ck76ScWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oPTl2yXSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x3aaseutWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qyg8gt8gWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EC6SM2oIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xUhJcvnTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3NlY4PrVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 247
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xOXz4xzPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func z4E2qvXeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GPmmb3CqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0MiNZqqTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QGRffIwWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pfhB1deuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k8bo0fAvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xIRJkdWHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5oEA8dhlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rjl9DqBmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BE6KTYcQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xfqrpE1dWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GGy0IG52Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZRDMpwNtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 104
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fCdTYdS2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7ZQeb7wQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3W2UxfLiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VyoZWxGtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 240
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2nqAVaHiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1NQ7gNReWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ihei4QMUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xuTQN5WCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func U7F5LPaTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 87
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8WC3flNoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TmcNcLJLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XtNQqYNFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hqLUmVwyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TUyjQJdQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 140
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 11JnIIT4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XMfqzWrSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bOvgF783Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l51skC7bWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HsMu95byWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7lKroK7mWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W7Ao9VjKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tkC6NapVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Lc3r8UiYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tCYvM3ZOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Sf5p2OgTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func a19xZGxkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func liq3RynXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B8To3IcjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 55
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tTaREYq9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 204
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VKlzgOwKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zjeGCuDjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TfInhmwsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3OuCpEfiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Qf7r103hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 231
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5WMetoPYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Y1ms7SrxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mrTh9W5WWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QYC4puGAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bHEbohZoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5uXit3aQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bxnH6Bh1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vp4VBgRKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hPlWoZZTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 78
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G3xhXR9sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xka95fM7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hK61Hpx2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 71CWcG3yWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5FmfjnnZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CMqgnOrZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LPmhX9GXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1rVhnIfSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AMGjNAQVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yJ994Q8WWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HhtSRoIMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func J8F3SROHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 97vHojX6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0PBWnImcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LXHRfiTTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yASOYvbrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TIP4RA9bWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nPBewD69Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KgJ8ziW8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WYa2VoNnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IPS7qvYzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 34WRSqaEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func u44Ny8Y5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nPacKouyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 198
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kaF9Dty6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1Wxvsnf6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SkDud9C7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 06wZRnpiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nIdIySnOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RGQBz57OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4IF7pUYPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xJSu8xBgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2LlpuCUlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MlsoZGyfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func c1rQQUBdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 64
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QUJ7rKgNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vkjXxQFQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zIaOIKTUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UYSW2D7YWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8wcdnAHtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 92nTbyOMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SPeTHKvLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cdORYL0YWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DbmNjYikWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hNOgTOs5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tmEdMfKYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NL8kF1ooWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DaRGZnE7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4BPVHiE2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 288
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func z9UwXLX0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 224
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eTQwny3jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CmMKuNXMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3WmS55j3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GmBKjkNuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wt1YEXVbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bC3I6ObeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func L4q8BzSiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EZnxhgbqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wP3Ncr6NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JwZ9h2rAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QlCyoXrRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ij9dhxOMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IhfgsKveWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TifGRpBAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UJVDTwm4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jw3ld26CWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 140
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WYfOmnIdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func N84F1KAsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TUnYAGS6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Jpumvv37Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func upvCN5ygWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 87
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 01xSyBZfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KiemdDfrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 65pzowFlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tQgjwljHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pTePy1btWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qsSCTjHTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iCuL3ExSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 28
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZpYgWvHiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wc7gaz4WWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XYRmJvDVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YaLMBjMaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func L4k0PFVJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HGDrpu8sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func C3C4DEdsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ely7rStSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gvhAPEE1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1xQ5F3ZPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yYnTl7rxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uWTkrxqMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6Rrh6D96Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ljwTJUGAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WcLrqwo6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Fs452gkrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cwrTBFyIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4IhJ70LUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IGyfy5EXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uArTuNpUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func c5Ubjup4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tF1dJEgvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DdOii9KbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 87NqeQoGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Bk6V31UUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KJRE8DozWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OSym29WNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gPIujGjDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 111
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lbxOaaNqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gMAqazkCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rKiJLwcOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qUXJmEUsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dT5qKqBJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hOctc74nWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AxEQW6DhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func g8lqrA0ZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func e6LsHTMvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FmkJ3mU8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3r4YBmW0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func grIfDVFiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ppSAEcx5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vwa5HgK5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ksaoXvJZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 111
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qPvtckp7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gqcccT8xWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yKMwIFjXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W4APugJmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qGp93EbZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func njntiMRqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ahTiF8ZZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m91bkvbkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XqNZIZIYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9SWdgIESWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gOT6BZJ0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AUuxd5jLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FO9zNQ8NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CYuOfn5KWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iszaZVNyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6QGThXvRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WDvgApNJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 104
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func olhXlIkoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HypErTPPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AV59Y50ZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hrg56OwUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 144
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func z0NFPS3yWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PsrLkJ2TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func E4aezi9MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8rIGoJSxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sjtnqUchWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 88
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MkFbeOFNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QWUzFwtFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dsMmlt4KWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 120
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func syjZYTVOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iBVYbTn1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func e8NvmbmJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CjazkiJyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gzQfNNNSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KMXgOU9OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ccn6ZouQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TdJ5UfUtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OYBe0x2CWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 131
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 26oLS1B1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6k2yBLZOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sSYzm8M2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VkHR1EGrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func b6iK0XofWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pw5sJuuwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kyIkVIsuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 181
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nWdYSqGwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gnAJILI5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Lzk368JkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CuP4mFsAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UBcOVXw8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gL0NmgNYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x8WrNLLXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 55
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3bHaZ7rUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MJZDTnOaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func d473LBGRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 247
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func z8q4g96XWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4JNOH4guWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 73E4dX0eWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NBisQWV4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jxe9wRIYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aNESazg5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lcs1VkvbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B1EN0LwIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6bWTF9IcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Rh8a9IHhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func g0jfoqgfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SIUPXMP4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UQqGUPIjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Gy5YHDo1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Bkvu6OyiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zDTIulrmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func c6Dgc5HDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Llwon5XzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VqqEIX9fWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FO0xyoOoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func U8NLsISnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BT8SHyHKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1CC7RAWRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7Qv088XlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BOYUgN96Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ylZHuykNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func annemX2mWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 41OkFCunWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kbDtCd5ZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gUETsvpqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VQ9aQQA4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WCvVlHbnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func e452G31sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wkJJZRqrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XIDH85kiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func I81I4ad0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rgSlZPOTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0igwkdHPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gdmYRMktWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HEks8P8YWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5kakSM97Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lB333Mw5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TZjaMJzTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xYFASGnbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GoCZe165Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f2PTg9pNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vp4zywn5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xZ3iIOItWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func z10ke2yOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MaBkCHdFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func up5mmrcXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cvVVfQGPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 66IYOy08Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4aB6kkmvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 204
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OtzaHADGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GrlZ4o1vWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uy4xqwtkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lc6cRA9mWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YGGXS0fxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iHpyC5NyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 48S9SrklWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t1z0OT1AWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sVuvV4a1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 17zKBkCqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oljIWuGAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BXbEAiboWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Q77yjxxMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 96
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DPZ0v9cCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W7wWsK3WWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 30
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HB5NXcxsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func a3iD9a3SWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3aJ1vPNYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hC1W9IHbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uvZ7FKbbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nKvQhs20Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CJHjoW0sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fEyOFkQkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rewwuR8wWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GPVaJDJwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GiIQmhDaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ATqmJviHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IHnmTV6fWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CISX07BLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 90aqpHy6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t5p80QC9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1lWhndzUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QO8nzMl2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 51
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func g5017yNEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0Ko6i3qNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wKznjLBFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JUGe37nRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zPZJGY7NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SA4fEFPUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6NrLIcsrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func naEmIIRKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func y5UYoCG2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func M9LlvuZZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sQv3rdjcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XnPGNfbbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EXU98ftHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YL4kM8WjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func J1OamAuDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pWu64jmhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YnYVifYoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func w0j0ZbazWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NSqC68TpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 288
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8ItfZb7CWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NciE2QQDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nu5qSQOSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0XmJhTbAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Kt59bofUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lG1egR98Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 231
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PotI5kplWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JSD1DCTWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func octONy66Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func urwhe5RxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 141
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CP0rGE2IWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0Vmrq9jgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X1CH5VWqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iVvAupZqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8uljQa6QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XukCrwOtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CEppimllWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K05WamTLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7TXHIeDoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 260
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hD3KbJMaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XILfzm5sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Sj2Zmu10Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hFaLRmFfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 181
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jvxRlY3wWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TfFc108TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CS62MV1MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func stGklmReWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gboZ0YFrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7eMUOIj1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iaA8josbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3icMNPwMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BrgQSyU0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ALvaPzJyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nEn4D5tpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mdGP6kUlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lvaeD2tyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func skpbrs2lWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 19xqFENdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oztGruBpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 109
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TVilIbz0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X6lVkjpcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 719Ntd9JWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eZHr1xYVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func H0ch8aGNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JN6mcCtnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZxvsLkknWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func o608AzA1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QSREzCDVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tWuH3ztzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 88
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6iIRTfcyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 111
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Kl1spDqIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vwsxpcENWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func g8Ed8cmHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 109
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ihOVKVLRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JE0GoROiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CG6eqOXsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2IdYpN7RWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JVXFyQeVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pT8P43VQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VtToC55HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IpMQ74R3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8WwWXjzrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NsoCOGA1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BVebWJ8ZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 38rPCuRPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 42gV7urkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ei0LOKDaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Zh5msevZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t6yc6awoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 87
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FGyp8JPOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 78
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gKYS2XQzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dUOUIQQNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UoKRf6ZlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OikCSvg1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l9qQztKTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DoZLTHr5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ALfXD4BcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wzn8aaGIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HtAaOz56Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fakH9pnIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 30
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rScLeAnvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YdbvtLxWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Sxq9IscQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UluyvRwZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 144
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rlMIBSmQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6q7vbDv2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func L8CdZbGaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FL1X2FrEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9PN3lU3qWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 104
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func slXUWt2vWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 284
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wByUCAGPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TSqviL4rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pF11LghXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1dAxzWKbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 87
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func o5CCyF7mWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gfc0iNuIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ex8OjataWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CdmdUDerWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 55
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XryKb87cWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 116
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7UGhwqTIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3FTfVNyxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KpE1ImwJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IPlQJovKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YxiiJMbjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VgkEBfQmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VKOFe9N3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func smmL0aD7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Aif1sonMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5KZVl77IWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 07y2G8zgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Lp1wiBPWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jo2ecGRaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vK08bVX0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lPmQfoytWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PvOP86YOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pPJIHdeUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1PzRBqMtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EwUaA5WqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6pnve6xiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1ixymO6OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZxGoSZdNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 27xwTzQ2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NsjXV8ysWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1CfJJBUjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FnCLnHSzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LGuaAaFmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1fW5tOqcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func odsLS9zKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X1N8pwpfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rbTQFhBgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 192
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qxedOUo1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5zT6cUnWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 181
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8fIXQcN2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oZXXQhBeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UlLa524HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qcU7WfyDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XHoLPIQDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 28
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vYQVcCG1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EHNuoLDyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func u3siEQZeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CoLexi1OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DacXd9fOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HU1ReH97Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HYdboXN4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 222
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ejMKpIwEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 87
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JrTIhA1BWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ukxNekQBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func flHicoj7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JUhEgmuYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func otjiDxPLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HiV7dSfjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nwcwRWOJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tqmDzZGTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 181
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zufEGDC0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kjVbCs6xWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func b3XSRisrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oAoTvTM6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func loKOBfX9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func S1eZ2ziSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qyYmYfEbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func b4usQBYFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 262
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qNE79uUBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RIXjOZvzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xkMQ0BR9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K9rgdknFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Q4vBu3HYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dc7gpwnUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZqQbsW0SWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QH5XEBCZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func h8JnG8pQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 67
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Efh98yTFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func z1OxM9vXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sJtgQrvWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PY5WydOhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2ChtLcK6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LP7NTiYIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aoV2qoaPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WZyxQk9SWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2jXdAAFBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 104
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qW3GoX72Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func c5ClEcPYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6vVnIxMwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8zauONtHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RK9LAos6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YwLu8fqjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EvcJ1CUIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func M1F47sdBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func odYePEDTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nZSWDMfUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hMtmoXo9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mtpShshKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NAuo1UZwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 247
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Vch9GIq3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nUfCJgogWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9MjX2jBVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Kas8azpRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XX2RzEYKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 141
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 31jQStwxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uX8eAKx9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 116
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CRddmHUiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pX8ZFFSyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nZ62jraeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func V9z1FeUnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ms2ziB6vWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sjPFmm8aWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 109
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fWAtbPgDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ocalne9VWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1qkDgnu1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8G9FUP5cWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BadEiHM5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2g1Cc17jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uj7ZJEK0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KUwe5GiVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JquGwwlWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gd63jIZMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func J7R6pynRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 141
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xppFgE0ZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0XbJyzUwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9GK1UBiyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func z7VLhm8vWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6Mtqad4JWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Vqa3XiJIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rsfrT9VIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QjSDQJqxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9wEd5iKWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bEsGRHf1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9GokQDXjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vanQfWQCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func npl60CRBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 224
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lFxobQL0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 213
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TULr8XKpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LVxg4TvkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QRO43OsTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Z9LZ21UUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BQTwIJIZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RtJjeEW0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PX50OUwyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qVz8iOg9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YSXE13FLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YSHn15JGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j1Mc6RqXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PrbS5L3HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func stwmgrneWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7F81VDK4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OGLB3s4AWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 55
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oWPVpQNQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x147ePzGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B3md9TnuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eXC47yjHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Rw2snIJhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5klWlzFAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HhHtqxj9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dj65HRAfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qdAF9GScWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 87
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jZMMD37ZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IsdFyf7mWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dXPb0lEvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 260
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oie7LlKnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AwOEuMprWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 288
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5ywYtVC3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QIQqBxqmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NnH1uWERWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wkFMQYwwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m6FSQi2aWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UNyeVSXjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func w3R3dbZkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jrQyOnLpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BJA8zhhxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xq6DK2m3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iU0NkNuRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 69
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ccjDcCXoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func R4iX1vLJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UTKodVnHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EEDowOf2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tbqaRnHgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YxRD4fSYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j7hutIZvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0Mp1Sb7kWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6Yf4dbRtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dHmv1RKKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YsNgLVPrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 69
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tS05tZyzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0AOk6beoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2D8JVPfjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NN6so8ZJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2LIRhqHaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bXJMF50hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9h8sOBvuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NEQYvStyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bYCQU5XQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8klFqv4nWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func h6Cp7rgNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func v2BFbWKhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Hm0N98aoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dqufIsDnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KFkJ4LyTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func co5NYzvkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iS60OSEtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dq37mwTiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EmBBnzi4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DMLtDSYuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MKV4JTSlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 12
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pKC2goLjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 288
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KNXxuJRPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fjIBvtb0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uOl0fSW5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Gll3PxQHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 67
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HNBtIV0oWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 240
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ixgGhDDaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func s9uF8KMhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AHbyU1KdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TRIHj1kfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 192
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func miIcTMAsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func moCfLKi1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func v0k5yMOpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FuBICk5OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dN3Hg5sqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mcm84xe1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0iwjLXO0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VitjgxvbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tQQtZMJJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UXcR5R82Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8vLWkkghWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func teFTDFNmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jUl1ac1dWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EL2wa8mZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xYcCHjbZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kJI7f4YDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8DgMvIeoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jZgYgDC1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1S2uyg9eWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DP1j4EauWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0MOIpRhtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jqaR4CEZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KrGs6wyoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5UG8MCWMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 116
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gAKm0jTnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NW7cUxWqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func szvdd1pTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func I07jmEpKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SDp6dN3yWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2DaZ18KBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 109
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NaUvgjFtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k6SrBknFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hcf3SKMpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 28
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7azORrEmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MrS3Xy23Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UUIgPOTRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FQOIdqEvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eBxdpavnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 78
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Y5BWoiaHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MZ7VsUFcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bbh3euc4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mPDpkttJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8DiLZDiJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cv01lGdeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OVvqROqTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UH8kx86sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kOKFM4GSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8wPscJWMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qb2u2d8dWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PxkAKG0HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aGUq9I6TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Vw5qaRFjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 247
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FvWbLUzcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eSvbSMd6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Y4XPzMMqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZgnNd1ZaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hrGGpZt8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Vu6L1gcBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G9ptCGeCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IE7Qn4ZmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Rjghhf5cWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m32iEIeTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Tpaso2KcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func U05XfW6QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mlrwnFl1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oyLmP1lBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tgiJ8SBMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oFV9dsbiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2Ouc51F7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zph3fu3IWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func E4ITpWVAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 207
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Jm7up8xEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func epkVL7RkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func o0ROEEt9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 192
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NvX73Z1pWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IAZw1midWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XTystOdVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XvPzt7UBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7Vbj9elLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7h6V3OfOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7IGPfgHDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ovDCBzFeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func V5220VkEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cJGoBe16Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EL5EjvEJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NoTT7q0cWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 260
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qweIgjzAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oCzNoa5zWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LJL3AgTOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 65
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VXmygZynWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xH0RtSBPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gEdDy8vSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KElBxaBnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8Q6iWrExWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ttl1FDR2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 96
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WPloURq1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RN7CDrXgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 127
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BB7v5YymWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 141
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aCpOK150Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Gief9yQSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func od6Z3yj8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9tk0RgWjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xsSHo49vWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZogZESeEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jgszOjOKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5k9lq2bBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tDllBBNmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dcDcQDelWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Prq2SBdmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 247
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QpO9OhAbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func r3jswFrqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tCHuTP58Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func r9DeiesZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EtnGkYdbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Y1yLmL1zWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YqVUpuFNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i33qTR6eWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AjZeLIwAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G5aN1xQ4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nEp4xohQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Xd70WBrsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func I6w3DLqNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UfRyDznFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xQ8BBJq0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Z3bknWIcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Nj6Qi2QkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BLMA1f5rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 288
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0QECva29Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 288
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 88ZzOJqGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func weQqJaOUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func b3roVMzoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qlesnfdEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qfboKvxJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Wlww8sGLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jjR1eASOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BwZD4QuZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dGxzuOkOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fLD40yQ4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MzUyF96AWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EblnDQwJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7qDHT8rqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func u2PAPC5fWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UJd2eUDUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W6Xvw4rEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 67
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yqrgCDogWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lQpPISi1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func moozpHDnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 65
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JB1pzBQuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SNSaZKucWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 262
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IauRJBTgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QaxVLwU6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xKlZTsPHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BSX3YoBOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1dIZfyRJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7oMQJTVRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VvPt1gizWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LI25HQrTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TMl15JDbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 120
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Yt5h9wziWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xlGVL9qrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Dqs52AXRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qeQdnznwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func COjVv3HaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zGHFofcyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dknLc3KJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func y8JSdkfOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HMcvRrDLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ypTfOhNsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6EGy4XX4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func p6OvbJa6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BUM6yxh2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0gHfLUybWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fC9tQqmJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ooyTyesGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Wj1trAwrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IGNFT4edWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZUCGWsOTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XeJosprmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 120DozsTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BNtduLbHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zSFO3HdmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yvgofxNrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IQI30rwzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BLdliwyMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 28xgNYcdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5tGFAzZ7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CNN9TK85Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EXCTEmQVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4bsTnftgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sshVTfGbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zeu7y47nWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func A7rIphtBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dfsFMNyGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 17TrXEn5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uqMYvfXOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func klSQN13VWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZBMJz7XhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BMRWOJXzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 131
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uVfW42Y7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IgRBsstRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6VJRfoBSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QER6cmL1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BFpNp84xWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XMivYcw5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 207
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SyzFP4pjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PUTUhdUnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NDspP2p6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 30
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZG3tSPOBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vgxmf0ZpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hlvCyJuwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QKtEmycBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UiJ8fLEfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QNOpgg2YWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LK4OFT3QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4djbInMgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 21OgF6CAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JdntffRUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wfESBkOtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Xzf8XoG9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 144
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WUxcEr4yWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vzk1PcljWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9VZakMxDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0WN4dLptWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eRI7cMfmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B792TClmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 55
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i36fPb1RWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fXVy3yyMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QetU9JE7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cWBvpRN0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zTJaCMGzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5he3zfL1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yscPgTAwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OlSrdMpyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1H7ZwX1rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WCaRAUkKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func piZd9jVmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kAi4k18YWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vXW9jNvBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yKT0cPKsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 65
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oipPDVNsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 21
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tNjwW8P4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iugZaz21Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K04t5eF3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SzCyM3JtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 28
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YjVWRqZdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8YL2c9AAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 288
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qb9mPQdnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZwiO4OaQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 240
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nbj1D2u1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ytPk3QaiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 116
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eSPRbffxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WpY2zZ93Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iK0Xvri1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TBacK5wkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hUcoWAKoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SE5MnddjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 144
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Dz1OFMChWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PEdB2YeaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HMdmOy6oWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iAVAJEcIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func T4hYQlWOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bbxR0CQpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pwo85omFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 224
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oH5v4lDLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Lzdgd5U8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l288uDHgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 207
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FPGPRtQbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OvTXOV2DWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BwNxR2xEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WIvl8cKiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EoB1EC4xWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MDLXd0PnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BkvKRLXYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XHvpmvhAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OcnO5NuJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AtDV9yYYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WWyQDJDBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ufnj62V2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ijwSG1bDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0qsp5ECWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vHj59islWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3yMvvDEzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t3K8ylDVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SEbNTHNoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8kC0AYd9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BvR8k4xGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eLHstA2jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bQbD92UMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dUbBybleWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EYfZKVUQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 87
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K7raBLyHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UP4hvYL2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sb87grTHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MvVLrc8QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0O8U9PdeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yBy5AMJHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LNPIxKafWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FemIzoGjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XvxVuPfOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vCXSNczbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jupjnrWLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JCSWK45rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func c1UWAHYgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uyl4kR7WWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vXKz5vjOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func I9LmcFPVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZNA5721LWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4tXFVWZfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tkI4o9sQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eKfcvDTnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func z1ejbDluWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YvU7NLgQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func d0UzTvPFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6FGf9QydWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cZnOEunFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mNjsBtEwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fYf8kYtdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QDvcQd2iWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oC69WTJ1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fNmLGHdWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 204
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cok2wV41Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bDgBXhguWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8LyNezrVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mHQh7WwuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8OSLSHpMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DiCtgzBLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CfvDY5ncWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FhpLs4N2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZZCTRp2lWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6yO0DsqpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func y7OCbwpTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func M42NvZ6QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cXX5YH4HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dhTjULZfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func em7XO972Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ck2DxhpWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func z4rbS0QJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 28
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GaawsCT0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1UiUl6ZrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func c8od7uQlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lE3gjBiPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AHO5pOoYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func codU75YZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j7cLHDmEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rhl2eotcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 91ITXlZyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cBbwLmVjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ipS5taieWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YjPrWIkLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2r1mXusdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oHXYZKTuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7aW82aDUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DkTo7rFuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9OuyEISVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DCwi5EvEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HgOAUsyCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ACBtMbNKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 231
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OtxShMzqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AT9qS7PaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xvcH1QH4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rZqW62ABWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func A0wo4DGVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eVl0SsASWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func smyG91GOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3HmgIEMWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dS2Jgv4kWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NMQIpW6eWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4gKFGnvzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dsaVmXowWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yf0uyCwLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 120
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Cggc47W6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 88
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GtmUzjx3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GBmxYZekWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DFT1JGwkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func T0QrWfY9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func O4EAF9NdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dioaVPKrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2CyQGMFpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9d9NWdOLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 64
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZcfZMdOXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1Vk19bthWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OAUFM11SWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1LBK9wHwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CxDnS068Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Dy33v740Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dvzBke9rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 207
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xdOyNnWdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YvOe0GSCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0HCndYqgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zj5Li20qWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XMNKryv3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HzS2byCmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bpAgEU1mWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XV1yk1ZIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 240
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HlMXAQheWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hsB6cGuQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Z3bDas0FWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Wbp7VVjmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZWgrX7hsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wQF7u7siWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oOM02G4LWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j2IApFyBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 30
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8H0Eg8gwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oi41no31Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pOA6tw7fWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HBPOXOxLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GBM2UfHTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func P71YF22uWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sb6dj2u7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hyaV79P3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KXBRNlIVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8iKecLX6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CwjzEVnvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BcDDzV7fWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9IjjT5eBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KmFdB3slWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Uq3uFOmPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 224
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5rnC7M9VWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 140
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VRzUl2TMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x4NAiLmzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Q7QBjvkPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GuKcozxBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JiG8vJkmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3RMA40qhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9idDKm3IWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func T49iCsGHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ritYI7ZVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NwrVgRR7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 204
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func H1erYroSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QoJCjmecWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wqcOXYCEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kV9DiAvMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 204
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vBVF5OlCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mv5Xywx1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func P3xpS7T5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Uk3QwejsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 192
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func V6iHscbjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CrbWZA6mWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CCRM2d4rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Pob1Bj5tWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Km2sIJCvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wYaGgr8NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PoPSrndjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GqdDFmcOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tvbscUHmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jMgV4AxAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tWhUsaOJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 47zxxo6cWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xLBoPfl6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pJ7IWddYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3xs4jxGXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Tc0xlHmuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nNZeT7O9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XFmV7aKJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wXtuXpQcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ynhw2J6ZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Qg79E9XOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SzyP5jZgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G5zWlXlhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rm42BajlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 284
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zMqHK1bZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 262
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sHLC67WMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NxE13S6TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 116
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3aLgsGikWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2gO80eI6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UBHqbPnPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9tKBpeofWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 30
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Bf1IWKGVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xkIe9eC6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8BevuJ40Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func e4K5f1yFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hzfgo7wJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SYbEilJtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qUOP3psAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xvgdtWErWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5Gx18KtQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 144
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tLreMXk1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 140
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qF0iEIWzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mE22PVgJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pMdK9EqaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0gVAuJh5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 96
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DoAtzyb9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lxjfB0LKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tEBzWNiIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 75
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l0bE4cwNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 144
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kWejZnnSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Bzqncu6wWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9pbWskCAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kILIkia9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

