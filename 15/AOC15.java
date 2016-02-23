public class AOC15 {
	public static void main(String[] args) {
		Ingredient sprinkles = new Ingredient("Sprinkles", 5, -1, 0, 0, 5);
		Ingredient peanutbutter = new Ingredient("Peanut butter", -1, 3, 0, 0, 1);
		Ingredient frosting = new Ingredient("Frosting", 0, -1, 4, 0, 6);
		Ingredient sugar = new Ingredient("Sugar", -1, 0, 0, 2, 8);

		int part1 = 0;
		int part2 = 0;

		for (int a = 0; a < 100; a++) {
			for (int b = 0; b < (100 - a); b++) {
				for (int c = 0; c < (100 - a - b); c++) {
					int d = 100 - a - b - c;
					int capacity = sprinkles.getCapacity(a) + peanutbutter.getCapacity(b) + frosting.getCapacity(c) + sugar.getCapacity(d);
					int durability = sprinkles.getDurability(a) + peanutbutter.getDurability(b) + frosting.getDurability(c) + sugar.getDurability(d);
					int flavor = sprinkles.getFlavor(a) + peanutbutter.getFlavor(b) + frosting.getFlavor(c) + sugar.getFlavor(d);
					int texture = sprinkles.getTexture(a) + peanutbutter.getTexture(b) + frosting.getTexture(c) + sugar.getTexture(d);
					int calories = sprinkles.getCalories(a) + peanutbutter.getCalories(b) + frosting.getCalories(c) + sugar.getCalories(d);
					int total = capacity * durability * flavor * texture;
					if (capacity < 0 || durability < 0 || flavor < 0 || texture < 0) {
						total = 0;
					}
					if (calories == 500) {
						if (total > part2) {
							part2 = total;
						}
					}
					if (total > part1) {
						part1 = total;
					}
					
				}
			}
		}
		System.out.println("Part 1: " + part1 + "\nPart 2: " + part2);
	}
}