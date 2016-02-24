public class Reindeer {
  
    private final String name;
    private final int speed;
    private final int flightTime;
    private final int restTime;

    private int time;
    private int points;

    public Reindeer(String name, int speed, int flightTime, int restTime) {
        this.name = name;
        this.speed = speed;
        this.flightTime = flightTime;
        this.restTime = restTime;
        this.time = 0;
        this.points = 0;
    }

    public int returnDistance() {
        int distance = 0;
        int calculatedTime = 0;
        int fullRounds = this.time / (this.flightTime + this.restTime);
        if (fullRounds > 0) {
            distance += speed * flightTime * fullRounds;
            calculatedTime = fullRounds * (this.flightTime + this.restTime);
        }
        int toCalculate = this.time - calculatedTime;
        if (toCalculate < this.flightTime) {
            distance += this.speed * toCalculate;
        } else {
            distance += this.speed * this.flightTime;
        }

        return distance;
    }

    public void moveOne() {
        ++this.time;
    }

    public void addPoint() {
        ++this.points;
    }

    public String getName() {
        return this.name;
    }

    public int getPoints() {
        return this.points;
    }

}