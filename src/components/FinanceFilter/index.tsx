import React, {useEffect, useId, useMemo, useRef, useState} from 'react';
import {
  FilterWrapper,
  PeriodPicker,
  PickerWrapper,
  DateButton,
  DateButtonText,
  DateList,
  Title,
  Wrapper,
} from './styles';
import {strings} from '../../values/strings';
import theme from '../../styles/theme';
import {months} from '../../values/strings/months';
import {years} from '../../values/strings/years';
import {week} from '../../values/strings/week';
import {DatePeriod} from '../../models/DatePeriod';

type DateItemType = {
  id: string;
  date: string;
  selected: boolean;
};

type FinanceFilterTypes = {
  title: string;
}

export const FinanceFilter: React.FC<FinanceFilterTypes> = ({title}: FinanceFilterTypes) => {
  const [selectedLanguage, setSelectedLanguage] = useState('month');
  const [periods, setPeriods] = useState(months);
  const [dateItemList, setDateItemList] = useState<DateItemType[]>([]);
  const pickerRef = useRef();

  const handlePeriod = (value: DatePeriod) => {
    setSelectedLanguage(value);
    console.log('VALUE', value);
    switch (value) {
      case DatePeriod.YEAR:
        const dateYear = years(new Date().getFullYear()).map(year =>
          year.toString(),
        );
        setPeriods(dateYear);
        break;
      case DatePeriod.MONTH:
        setPeriods(months);
        break;
      case DatePeriod.WEEK:
        setPeriods(week);
        break;
      case DatePeriod.DAY:
        setPeriods([]);
        break;
      default:
        break;
    }
  };

  const handleSelectDate = (value: any) => {
    console.log('VALUE', value);
    const updatedDateList = dateItemList.map(ele => {
      if(ele.id === value.id) {
        const updatedDate = Object.assign({}, {...ele}, {selected: true});
        return updatedDate;
      }
      else {
        const updatedDate = Object.assign({}, { ...ele }, { selected: false });
        return updatedDate;

      }
    })
    setDateItemList(updatedDateList);
    return;
  };

  useEffect(() => {
    const currentDateList: DateItemType[] = periods.map(period => {
      return {
        id: period,
        date: period,
        selected: false,
      };
    });
    console.log(currentDateList);
    setDateItemList(currentDateList);
  }, [periods]);

  return (
    <Wrapper>
      <FilterWrapper>
        <Title>{title}</Title>
        <PickerWrapper>
          <PeriodPicker
            ref={pickerRef}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              handlePeriod(itemValue as DatePeriod)
            }
            mode="dropdown"
            dropdownIconColor={theme.colors.initialGradientColor}>
            <PeriodPicker.Item
              label={strings.financeFilterPeriodLabel.year}
              value={strings.financeFilterPeriodValue.year}
            />
            <PeriodPicker.Item
              label={strings.financeFilterPeriodLabel.month}
              value={strings.financeFilterPeriodValue.month}
            />
            <PeriodPicker.Item
              label={strings.financeFilterPeriodLabel.week}
              value={strings.financeFilterPeriodValue.week}
            />
            <PeriodPicker.Item
              label={strings.financeFilterPeriodLabel.day}
              value={strings.financeFilterPeriodValue.day}
            />
          </PeriodPicker>
        </PickerWrapper>
      </FilterWrapper>
      <DateList
        showsHorizontalScrollIndicator={false}
        data={dateItemList}
        horizontal
        keyExtractor={date => date.id}
        renderItem={date => (
          <DateButton onPress={() => handleSelectDate(date.item)} selected={date.item.selected}>
            <DateButtonText selected={date.item.selected}>{date.item.date}</DateButtonText >
          </DateButton>
        )}
      />
    </Wrapper>
  );
};
