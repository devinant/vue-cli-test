<template>
  <v-card>
    <v-container fluid>
      <v-row dense>
        <v-col>
          <v-text-field
            filled
            data-cy="firstValue"
            type="number"
            label="First Value"
            v-model="firstValue"
          />
        </v-col>
        <v-col>
          <v-select
            filled
            id="select-operation"
            :items="calculatorOperations"
            v-model="selectedCalculatorOperation"
            label="Operation"
          />
        </v-col>
        <v-col>
          <v-text-field
            filled
            data-cy="secondValue"
            type="number"
            label="Second Value"
            v-model="secondValue"
          />
        </v-col>
      </v-row>
      <v-row dense>
        <v-col>
          <v-avatar :color="calculatedResultBackgroundColor">
            <span class="white--text headline" data-cy="result">{{ calculatedResult }}</span>
          </v-avatar>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { SimpleCalculatorService, CalculatorOperation } from '@/services/SimpleCalculatorService';

enum CalculatedResultBackgroundColor {
  Primary = 'primary',
  Orange = 'orange',
  Teal = 'teal'
}

export default Vue.extend({
  name: 'SimpleCalculator',

  props: {
    calculatedResultBackgroundColor: {
      type: String,
      default: CalculatedResultBackgroundColor.Primary,
      validator: function containsCalculatedResultColor(
        color: CalculatedResultBackgroundColor
      ): boolean {
        return [
          CalculatedResultBackgroundColor.Primary,
          CalculatedResultBackgroundColor.Orange,
          CalculatedResultBackgroundColor.Teal
        ].includes(color);
      }
    }
  },

  data: () => ({
    firstValue: 0,
    secondValue: 0,
    selectedCalculatorOperation: CalculatorOperation.Addition,
    calculatorOperations: [
      CalculatorOperation.Addition,
      CalculatorOperation.Subtraction,
      CalculatorOperation.Multiply,
      CalculatorOperation.Divide
    ]
  }),

  computed: {
    calculatedResult(): number {
      return new SimpleCalculatorService(this.selectedCalculatorOperation).calculate(
        Number(this.firstValue),
        Number(this.secondValue)
      );
    }
  }
});
</script>
