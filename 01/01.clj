(ns aoc-01)

(use 'clojure.java.io)

(defn to-numbers
  [x]
  (if (= \( x) 1
  (if (= \) x) -1)))

(def data
  (map to-numbers (seq (slurp "input.txt"))))

(defn part1
  []
  (reduce + data))

(defn part2
  []
  (loop [i 0 sum 0]
    (if (= sum -1)
      i
    (recur (inc i) (+ sum (nth data i))))))

(println (str "Part 1: " (part1) "\nPart 2: " (part2)))