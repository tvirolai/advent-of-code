public class Ingredient {
	private String name;
	private int capacity;
	private int durability;
	private int flavor;
	private int texture;
	private int calories;

	public Ingredient(String name, int capacity, int durability, int flavor, int texture, int calories) {
		this.name = name;
		this.capacity = capacity;
		this.durability = durability;
		this.flavor = flavor;
		this.texture = texture;
		this.calories = calories;
	}

	public int getCapacity(int amount) {
		return this.capacity * amount;
	}

	public int getDurability(int amount) {
		return this.durability * amount;
	}

	public int getFlavor(int amount) {
		return this.flavor * amount;		
	}

	public int getTexture(int amount) {
		return this.texture * amount;
	}

	public int getCalories(int amount) {
		return this.calories * amount;
	}

	public String getName() {
		return this.name;
	}
}