---
sidebar_position: 1
---

# Score Calculation 😼

This score calculation documentation only applies to **v1 (latest)** of the scoring system

A player's performance on a map is given in terms of score after a successful completion of the map.
Most of the time, combo plays a major part in the scoring system since it serves as a multiplier of the score.

**Total Score**
Score is divided into three portions: accuracy, combo, and bonus. The accuracy and combo portions together comprise the base **1,000,000** _(one million)_ score with a 1.00x score modifier, and then the bonus is added on top to determine the actual total score.

```
accuracy_portion = 0.8
combo_portion = 0.2
total_score = 1000000 * ((accuracy * accuracy_portion) + (combo / max_achievable_combo * combo_portion)) + (bonus_portion)
```

These portions can be adjusted by changing the values located in the `constants/scorePortion.ts` file:

```ts
export const DefaultAccuracyPortion = 0.8
export const DefaultComboPortion = 0.2
```

|   Type   | Score  | Accuracy portion?  | Combo portion?  | Bonus portion?  |
|:-------: |:-----: |:-----------------: |:--------------: |:--------------: |
|   Miss   |   0    |         ✅          |        ✅        |        ❌        |
|   mmph   |   50   |         ✅          |        ✅        |        ❌        |
|    Ok    |  100   |         ✅          |        ✅        |        ❌        |
|   Good   |  200   |         ✅          |        ✅        |        ❌        |
|  Great   |  300   |         ✅          |        ✅        |        ✅        |
| Perfect  |  350   |         ✅          |        ✅        |        ✅        |


# Health 🔮

The amount of health increase or decrease is defined relative to a "Great" hit result. By default, a "Great" hit result increases HP by 5%.

|   Type   | Relative addition  |
|:-------: |:-----------------: |
|   Miss   |       -100%        |
|   mmph   |        0%          |
|    Ok    |        50%         |
|   Good   |        75%         |
|  Great   |        90%         |
| Perfect  |        110%        |

