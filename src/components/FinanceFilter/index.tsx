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

export const FinanceFilter: React.FC = () => {
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
    setDateItemList(currentDateList);
  }, []);

  return (
    <Wrapper>
      <FilterWrapper>
        <Title>{strings.financeFilterTitle}</Title>
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
        data={dateItemList}
        horizontal
        keyExtractor={date => date.id}
        renderItem={date => (
          <DateButton onPress={date => handleSelectDate(date)}>
            <DateButtonText>{date.item.date}</DateButtonText>
          </DateButton>
        )}
      />
    </Wrapper>
  );
};
